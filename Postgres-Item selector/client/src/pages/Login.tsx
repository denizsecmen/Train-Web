import React from 'react';
import { Button, TextField } from '@mui/material';
import styles from './styles/Login.module.css';

function Login() {

  return (
    <div className={styles.area}>
      <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <div className={styles.body}>
          <div className={styles.textField}>
            <label>Email:</label>
            <TextField variant="outlined" sx={{width:'100%'}} />
            <label>Password:</label>
            <TextField variant="outlined" sx={{width:'100%'}} fullWidth />
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color="primary" className={styles.signup}>Login</Button>
            <div className={styles.flex}/>
            <Button variant='contained' color="secondary" className={styles.signup} >Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
