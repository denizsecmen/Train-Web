import "./signup.css";
import { TextField, Button } from "@mui/material";
import { useRef } from "react";
import axios from "axios";
export interface AxiosReponse{
      data: {
        mes: string,
        cookie:{"jwt-key"?:string},
  }
  headers: { "set-cookies":undefined|string}
}
export default function signup() {
  let name = useRef<HTMLInputElement>(null);
  let password = useRef<HTMLInputElement>(null);
  let password2 = useRef<HTMLInputElement>(null);
  function Reset() {
    if (name.current)
    {
      name.current.value = "";
    }
    if (password.current)
    {
      password.current.value = "";
    }
    if (password2.current)
    {
      password2.current.value = "";
    }
  }
  async function  signUp()
  {
    if (name.current?.value=="" || password.current?.value=="" || password2.current?.value=="")
    {
      alert('Please fill all areas!');
    }
    else if (password.current?.value != password2.current?.value)
    {
      alert("Passwords are not matching!");
    }
    else
    {
      try
      {
        let res: AxiosReponse = await axios.post("http://localhost:9001/signup", {
          name: name.current?.value,
          password: password.current?.value,
        });
        console.log(res.data);
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
        <div id="Title">Sign Up</div>
        <div id="Form">
          <TextField sx={{height:2}} inputRef={name} label="Username" className="text"></TextField>
          <TextField sx={{ height: 2 }} inputRef={password} type="password" className="text" label="Password"></TextField>
          <TextField sx={{height:2}} inputRef={password2} type="password" className="text" label="Password again"></TextField>
          <div id="buttons">
            <Button variant="contained" onClick={Reset} color="secondary" >Reset</Button>
            <Button variant="contained" onClick={signUp} color="primary">Sign Up</Button>
          </div>
        </div>
      </div>
  </div>);
}