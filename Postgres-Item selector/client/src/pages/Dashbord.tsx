import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import axios from 'axios';
import styles from './styles/Dashboard.module.css';
import { Navigate } from 'react-router';
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Dashboard() {
  async function item() {
    let data = new FormData();
    if (!imageRef.current?.files?.[0] || !nameRef.current?.value || !amountRef.current?.value || !priceRef.current?.value)
    {
      alert("Please fill all areas");
    }
    else
    {
      data.append("image", imageRef.current?.files[0]);
      data.append("name", nameRef.current?.value);
      data.append("amount", amountRef.current?.value.toString());
      data.append("price", priceRef.current.value.toString());
      await axios.post('http://localhost:9001/itemadd',data);
    }
  }  
  function Reset() {
    if (nameRef.current?.value != null)
    {
      nameRef.current.value = "";
    }
    if (priceRef.current?.value != null)
    {
      priceRef.current.value = "";
    }
    if (amountRef.current?.value != null)
    {
      amountRef.current.value = "";
    }
  }
  async function auth() {
  let jwtKey = Cookies.get('jwt-key');
  console.log(jwtKey);
  await axios.post('http://localhost:9001/dashboard', {
      "jwt-key": jwtKey,
    });
  }
  let [auts, chauth] = useState(false);
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
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  return (
      <div className={styles.main}>
      <div className={styles.elementadd}>
        <FloatingLabel controlId='Itemname' className={styles.itemname} label="Item">
          <Form.Control type='text' ref={nameRef} placeholder='Item name' />
        </FloatingLabel>
         <FloatingLabel controlId='price' className={styles.price} label="Price">
          <Form.Control type="number" ref={priceRef} min="1" placeholder='Price'/>
         </FloatingLabel>
        <FloatingLabel controlId='price' className={styles.amount} label="Amount">
          <Form.Control type="number" ref={amountRef} min="1" placeholder="Amount"/>
        </FloatingLabel>
          <Form.Control type="file" ref={imageRef} min="1" placeholder="Amount"/>
        <div className={styles.buttonItem}>
          <Button variant='primary' onClick={item}>Add</Button>
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