import './App.css'
import Menu from './menu/menu.tsx';
import Signup from './signup/signup.tsx';
import Login from './login/login.tsx';
import Dashboard from './Dashboard/dashboard.tsx';
import { Routes, Route } from 'react-router';
import  { createContext, useState, Dispatch, SetStateAction } from 'react';
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let wrap = createContext<AuthContextType | null>(null);
  return (
    <wrap.Provider value={{ isAuthenticated,setIsAuthenticated }}>
    <div id="main">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>  
        <Route path='/' element={<Menu />} />
      </Routes>
      </div>
      </wrap.Provider>
  )
}

export default App
