import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <img src="./assests/logo" alt="Plant Party Logo" />
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/fourm">Forum</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/add-plant">Add plant</Link>
    </div>
  );
}

export default Header;
