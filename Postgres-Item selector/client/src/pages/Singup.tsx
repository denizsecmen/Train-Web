import { Button, TextField } from '@mui/material';
import styles from './styles/Signup.module.css';
export default function signup() {
  return (
    <div className={styles.area}>
      <div className={styles.sign}>
        <div className={styles.title}>SignUp</div>
        <div className={styles.body}>
          <div className={styles.textField}>
            <label>Email:</label>
            <TextField variant="outlined"  inputProps={{ style: { fontWeight: 'lighter!important' } }} />
            <label>Password:</label>
            <TextField variant="outlined" type='password' inputProps={{ style: { fontWeight: 'lighter' } }} />
            <label>Password(again):</label>
            <TextField variant="outlined" type='password'   inputProps={{ style: { fontWeight: 'lighter'} }} />
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color="primary" className={styles.signup}>Login</Button>
            <div className={styles.flex} />
            <Button variant='contained' color="secondary" className={styles.signup}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}