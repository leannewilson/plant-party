import React, { useEffect, useState } from "react";
import axios from "axios";
import heartOutline from "../assests/heartOutline.png";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);
  let [savedPlants, setSavedPlants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getplantsfromserver").then((res) => {
      console.log(res.data);
      setAllPlants(res.data);
    });
  }, []);

  const savePlant = async () => {
    let res = await axios.post(`http://localhost:5000/api/savedplants`, {
      res: allPlants,
    });
    console.log(res);
  };

  const ShowAllPlants = () => {
    return allPlants.map((eachPlant) => {
      return (
        <div key={eachPlant._id}>
          <img
            style={{ width: "100%" }}
            className="plant-img"
            src={eachPlant.image}
            alt="green and growing"
          />
          <span className="like-btn-container">
            <button className="like-btn">
              <img
                onClick={savePlant}
                src={heartOutline}
                style={{ width: "2em" }}
              />
            </button>
          </span>
        </div>
      );
    });
  };

  const ShowPlantDetails = () => {
    return allPlants.map((eachPlant) => {
      return (
        <div key={eachPlant._id}>
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
      <main>
        <ShowAllPlants />
      </main>
    </div>
  );
}

export default AllPlants;
