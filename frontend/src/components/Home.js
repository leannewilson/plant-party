import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Link to="/add-plant">Add a plant to our collection</Link>
    </div>
  );
}

export default Home;
