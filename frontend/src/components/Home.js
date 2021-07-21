import React from "react";
import { Link } from "react-router-dom";
import AllPlants from "./AllPlants";
import { GoogleLogin } from "react-google-login";
import Header from "./Header";

function Home(props) {
  return (
    <div>
      <Header />
      <AllPlants />
    </div>
  );
}

export default Home;
