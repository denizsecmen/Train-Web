import styles from './styles/App.module.css';
export default function layout() {
  return (
    <div className={styles.main}>
      <div className={styles.layout}>
      <div className={styles.flex}></div>
        <Button variant='contained' color="secondary" className={styles.signup} sx={{ mr: '25px' }}>Sign Up</Button>
      <Button variant='contained' color='primary' className={styles.login}>Login</Button>
      </div>
      <div className={styles.area}>
          <div className={styles.textField}>
            <label>Email:</label>
            <TextField variant="outlined"  inputProps={{ style: { fontWeight: 'lighter!important' } }} />
            <label>Password:</label>
            <TextField variant="outlined" type='password'   inputProps={{ style: { fontWeight: 'lighter'} }} />
          </div>
          <div className={styles.buttons}>
            <Button variant='contained' color="primary" className={styles.signup}>Login</Button>
            <div className={styles.flex} />
            <Button variant='contained' color="secondary" className={styles.signup}>Reset</Button>
          </div>
      </div>
    </div>
  )
}