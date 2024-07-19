import './styles/Dashboard.module.css';
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Dashboard() {
  let [auts, chauth] = useState(false);
  async function auth() {
    let jwtKey = Cookies.get('jwt-key');
    console.log(jwtKey);
    await axios.post('http://localhost:9001/dashboard', {
      "jwt-key": jwtKey,
    });
    alert("Hello");
  }
  useEffect(() => {
    auth().then(() => {
      chauth(true);
    })
  }, []);
  function mn() {
    if (auts == false)
    {
      return (<div id="v">No</div>)
    }
    else
    {
      return (<div id="v">Dashboard</div>)
    }

  }
  return mn(); 
}