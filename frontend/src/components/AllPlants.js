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
        <div key={eachPlant._id} className="img-wrapper">
          <img
            className="gallery-grid"
            src={eachPlant.image}
            alt="green and growing"
          />
          {/* <span>
            <p className="img-description">{eachPlant.commonName}</p>
          </span> */}
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
