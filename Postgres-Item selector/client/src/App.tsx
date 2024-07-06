import Signup from './pages/Singup';
import styles from './pages/styles/App.module.css';
import { Button } from '@mui/material';
import { Route,Routes } from 'react-router';
function App() {
  return (
        <div className={styles.main}>
      <div className={styles.layout}>
      <div className={styles.flex}></div>
      <Button variant='contained' color="secondary" className={styles.signup} sx={{ mr: '25px' }}>Sign Up</Button>
      <Button variant='contained' color='primary' className={styles.login}>Login</Button>
      </div>
      <div className={styles.area}>
             <Routes> 
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;