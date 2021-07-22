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
        <div className="all-details" key={eachPlant._id}>
          <img
            className="plant-img-profile"
            src={eachPlant.image}
            alt="green and growing"
          />
          <div className="plant-title-profile">
            <span>
              <br />
              {eachPlant.commonName}
              <br />({eachPlant.scientificName})
              <br />
            </span>
            <p className="img-description">
              Care Level: {eachPlant.careLevel}
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
        </div>
      );
    });
  };

  return (
    <div className=".fav-details">
      <ShowPlantDetails />
    </div>
  );
}

export default PlantDetails;
