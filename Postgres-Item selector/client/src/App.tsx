import Signup from './pages/Singup';
import Login from './pages/Login';
import styles from './pages/styles/App.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Dashboard from './pages/Dashbord';
import Menu from './pages/Menu';
function App() {
  return (
      <div className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.flex}></div>
      <Link to="/signup">
          <Button variant='contained' color="secondary" className={styles.signup} sx={{ mr: '25px' }}>Sign Up</Button>
      </Link>
      <Link to="/login">
          <Button variant='contained' color='primary' className={styles.login}>Login</Button>
      </Link>
      </div>
      <div className={styles.area}>
        <Routes> 
          <Route path='/' element={<Menu/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;