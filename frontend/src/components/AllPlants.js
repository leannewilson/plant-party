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
        <div key={eachPlant._id}>
          <span className="img-wrapper">
            <div>
              <div>
                {/* <span className="img-title">
                  <br />
                  {eachPlant.commonName}
                  <br />({eachPlant.scientificName})
                  <br />
                </span> */}
                {/* <p className="img-description">
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
                </p> */}
              </div>
            </div>
            <img
              className="gallery-grid"
              src={eachPlant.image}
              alt="green and growing"
            />
            <span className="hidden">
              <button className="like-btn">🤍</button>
            </span>
          </span>
        </div>
      );
    });
  };

  return (
    <div className="grid">
      <main>
        <ShowAllPlants />
      </main>
    </div>
  );
}

export default AllPlants;
