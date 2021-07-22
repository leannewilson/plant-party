import React, { useEffect, useState } from "react";
import axios from "axios";

function PlantDetails(props) {
  let [plantDetails, setPlantDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getplantsfromserver").then((res) => {
      console.log(res.data);
      setPlantDetails(res.data);
    });
  }, []);

  const ShowPlantDetails = () => {
    return plantDetails.map((eachPlant) => {
      return (
        <div key={eachPlant._id} style={{ display: "flex" }}>
          <img
            style={{ width: "20%" }}
            className="plant-img"
            src={eachPlant.image}
            alt="green and growing"
          />
          <span className="img-title">
            <br />
            {eachPlant.commonName}
            <br />({eachPlant.scientificName})
            <br />
          </span>
          <p className="img-description">
            Care Leve: {eachPlant.careLevel}
            <br />
            Light: {eachPlant.light}
            <br />
            Water: {eachPlant.water}
            <br />
            Soil: {eachPlant.soil}
            <br />
            Humidity: {eachPlant.humidity}
            <br />
            GrowthHabit: {eachPlant.growthHabit}
            <br />
            Propagation: {eachPlant.propagation}
            <br />
            Position: {eachPlant.position}
            <br />
            Toxicity: {eachPlant.toxicity}
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <ShowPlantDetails />
    </div>
  );
}

export default PlantDetails;
