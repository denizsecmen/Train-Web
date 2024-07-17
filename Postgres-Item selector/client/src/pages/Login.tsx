import React from 'react';
import { Button, TextField } from '@mui/material';
import styles from './styles/Login.module.css';
import { useRef } from 'react';
function Login() {
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  function reset()
  {
    if (name.current?.value != null)
    {
      name.current.value = "";
    }
    if (password.current?.value != null)
    {
      password.current.value = "";
    }
  }
  return (
    <div className={styles.area}>
      <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <div className={styles.body}>
          <div className={styles.textField}>
            <label>Email:</label>
            <TextField variant="outlined" inputRef={name} inputProps={{ style: { fontWeight: 'lighter!important' } }} />
            <label>Password:</label>
            <TextField variant="outlined" inputRef={password} type='password'   inputProps={{ style: { fontWeight: 'lighter'} }} />
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color="primary"  className={styles.signup}>Login</Button>
            <div className={styles.flex} />
            <Button variant='contained' color="secondary" onClick={reset} className={styles.signup}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
