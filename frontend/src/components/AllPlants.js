import React, { useEffect, useState } from "react";
import axios from "axios";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getplantsfromserver").then((res) => {
      console.log(res.data);
      setAllPlants(res.data);
    });
  }, []);

  const ShowAllPlants = () => {
    return allPlants.map((eachPlant) => {
      return (
        <div>
          <img className="gallery-grid" src={eachPlant.image} />
        </div>
      );
    });
  };

  return (
    <div>
      <ShowAllPlants />
    </div>
  );
}

export default AllPlants;
