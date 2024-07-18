import { Button, TextField } from '@mui/material';
import styles from './styles/Signup.module.css';
import { useRef } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
export default function signup() {
  let email = useRef<HTMLInputElement>();
  let password = useRef<HTMLInputElement>();
  let passworagain = useRef<HTMLInputElement>();
  function inputReset() {
    if (email.current?.value != null)
    {
      email.current.value = "";
    }
    if (password.current?.value != null)
    {
      password.current.value = "";
    }
    if (passworagain.current?.value != null)
    {
      passworagain.current.value = "";
    }
  }
  async function submit() {
    try
    {
      let response: AxiosResponse = await axios.post('http://localhost:9001/signup', {
        email: email.current?.value,
        password: password.current?.value,
        passwordAgain: passworagain.current?.value,
      });
    }
    catch (e:AxiosError|any)
    {
      alert(JSON.parse(e.request.responseText).mes);
    }
  }
  return (
    <div className={styles.area}>
      <div className={styles.sign}>
        <div className={styles.title}>SignUp</div>
        <div className={styles.body}>
          <div className={styles.textField}>
            <label>Email:</label>
            <TextField variant="outlined" inputRef={email} inputProps={{ style: { fontWeight: 'lighter!important' } }} />
            <label>Password:</label>
            <TextField variant="outlined" inputRef={password} type='password' inputProps={{ style: { fontWeight: 'lighter' } }} />
            <label>Password(again):</label>
            <TextField variant="outlined" inputRef={passworagain} type='password'   inputProps={{ style: { fontWeight: 'lighter'} }} />
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color="primary" onClick={submit} className={styles.signup}>Login</Button>
            <div className={styles.flex} />
            <Button variant='contained' color="secondary" onClick={inputReset} className={styles.signup}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}