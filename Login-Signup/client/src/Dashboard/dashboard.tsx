import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
export default function Dashboard() {
  let [t, p] = useState(false);
  let nav = useNavigate();
  useEffect(() => {
    console.log("ssdads");
      let result = async () => {
        try
        {
          let response = await axios.post('http://localhost:9001/auth', {
            "jwt-key": Cookies.get('jwt-key'),
          });
          console.log(response.data);
        }
        catch (e)
        {
          alert(e);
          p(false);
          nav('/');
          return '';
        }
        p(true);
    };
    result();
  }, [nav]);
  return (
    t&&<div>Dashboard</div>
  );
 }