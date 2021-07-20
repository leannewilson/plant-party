import React from "react";
import { Link } from "react-router-dom";
import AllPlants from "./AllPlants";
import { GoogleLogin } from "react-google-login";

function Home(props) {
  return (
    <div>
      <Link to="/add-plant">Add a plant to our collection</Link>
      <AllPlants />
    </div>
  );
}

export default Home;
