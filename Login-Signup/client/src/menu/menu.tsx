import { Button } from "@mui/material";
import './menu.css';
import {  Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <div id="title">Menu</div>
      <div id="buttonlist">
      <Link to="/signup">
        <Button className="button" variant="contained" color="primary">Sign Up</Button>
      </Link>
      <Link to="/login">
        <Button className="button" variant="contained" color="secondary">Login</Button>
      </Link>
      </div>
    </div>
  );
}
