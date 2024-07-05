import styles from './App.module.css';
import { Button } from '@mui/material';
export default function menu() {
  return (
    <div className={styles.main}>
      <div className={styles.layout}>
      <div className={styles.flex}></div>
        <Button variant='contained' color="secondary" className={styles.signup} sx={{ mr: '25px' }}>Sign Up</Button>
      <Button variant='contained' color='primary' className={styles.login}>Login</Button>
      </div>
      <div className={styles.area}>
        
      </div>
    </div>
  )
}