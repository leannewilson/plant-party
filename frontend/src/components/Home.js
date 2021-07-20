import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

function Home(props) {
  return (
    <div>
      <Link to="/add-plant">Add a plant to our collection</Link>
      <br/>
      
    </div>
  );
}

export default Home;
