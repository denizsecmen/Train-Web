import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import axios from 'axios';
import styles from './styles/Dashboard.module.css';
import { Navigate } from 'react-router';
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { style } from '@mui/system';
export default function Dashboard() {
  let [auts, chauth] = useState(false);
  async function auth() {
    let jwtKey = Cookies.get('jwt-key');
    console.log(jwtKey);
    await axios.post('http://localhost:9001/dashboard', {
      "jwt-key": jwtKey,
    });
  }
  useEffect(() => {
    auth().then(() => {
      chauth(true);
    });
  }, []);
  function mn() {
    if (auts == false)
    {
      return ( <Navigate to='/'/> );
    }
  }
  return (
      <div className={styles.main}>
      <div className={styles.elementadd}>
        <p>Item name:</p>
        <FloatingLabel controlId='Itemname' className={styles.itemname} label="Item">
          <Form.Control type='text' placeholder='Item name' />
        </FloatingLabel>
        <p>Price($):</p>
         <FloatingLabel controlId='price' className={styles.price} label="Price">
          <Form.Control type="number" min="1" placeholder='Price'/>
         </FloatingLabel>
        <p>Amount:</p>
        <FloatingLabel controlId='price' className={styles.amount} label="Amount">
          <Form.Control type="number" min="1" placeholder="Amount"/>
        </FloatingLabel>
        <div className={styles.buttonItem}>
          <Button variant='primary'>Add</Button>
          <Button variant='secondary'>Reset</Button>
        </div>
      </div>
      <div className={styles.usersetting}>
        <div className={styles.chpassword}>
          <div className={styles.email}>
           <p>Change email:</p>
           <FloatingLabel controlId="floatingPassword" className={styles.email} label="Email">
              <Form.Control type="password" placeholder="Email" />
           </FloatingLabel>
          </div>
          <div className={styles.psgroup}>
           <p>Change password:</p>
           <FloatingLabel controlId="floatingPassword" className={styles.pswl} label="Password">
            <Form.Control type="password" placeholder="Password" />
           </FloatingLabel>
           <FloatingLabel controlId="floatingPasswordAgain" className={styles.pswl}  label="Password(again)">
            <Form.Control type="password" placeholder="Password" />
           </FloatingLabel>
          </div>
          <div className={styles.buttons}>
            <Button variant='secondary'>Reset</Button>
            <Button variant='primary'>Change</Button>
          </div>
        </div>
      </div>
    </div>
  ); 
}