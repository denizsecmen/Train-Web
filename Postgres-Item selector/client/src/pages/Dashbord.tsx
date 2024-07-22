import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import axios from 'axios';
import styles from './styles/Dashboard.module.css';
import { Navigate } from 'react-router';
import { Button,InputGroup } from 'react-bootstrap';
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
        </div>
        <div className={styles.usersetting}>
        </div>
    </div>
  ); 
}