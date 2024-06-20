import "./login.css";
import { TextField,Button } from "@mui/material";
import { useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { AxiosReponse } from "../signup/signup";
import { useNavigate } from 'react-router-dom'; // Correct import
axios.defaults.withCredentials = false; // Enable sending cookies with cross-origin requests
export default function signup() {
  let name = useRef<HTMLInputElement>(null);
  let password = useRef<HTMLInputElement>(null);
  let password2 = useRef<HTMLInputElement>(null);
  let nav = useNavigate();
  function Reset() {
    if (name.current)
    {
      name.current.value = "";
    }
    if (password.current)
    {
      password.current.value = "";
    }
  }
  async function  signUp()
  {
    if (name.current?.value == "" || password.current?.value == "" || password2.current?.value == "")
    {
      alert('Please fill all areas!');
    }
    else
    {
      try
      {
        let res: AxiosReponse = await axios.post("http://127.0.0.1:9001/login", {
          name: name.current?.value,
          password: password.current?.value,
        });
        if (res.data.cookie['jwt-key'])
        {
          Cookies.set("jwt-key", res.data.cookie['jwt-key']);
          return nav('/dashboard');
        }
        else
        {
          alert("Error happened during cookie transfer.");
        }
          alert(res.data.mes);
      }
      catch (e:any)
      {
        alert(e.response.data.mes);
      }
    }

  }
  return (
    <div className="body">
      <div className="menu">
        <div id="Title">Login</div>
        <div id="Form">
          <TextField sx={{height:2}} inputRef={name} label="Username" className="text"></TextField>
          <TextField sx={{ height: 2 }} inputRef={password} type="password" className="text" label="Password"></TextField>
          <div id="buttons">
            <Button variant="contained" onClick={Reset} color="secondary" >Reset</Button>
            <Button variant="contained" onClick={signUp} color="primary">LogIn</Button>
          </div>
        </div>
      </div>
  </div>);
}