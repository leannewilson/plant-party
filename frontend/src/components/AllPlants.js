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
          <img
            style={{ width: "100%" }}
            className="plant-img"
            src={eachPlant.image}
            alt="green and growing"
          />
        </div>
      )
    })
  }

  // const showPlantDetails = () => {
  //   return allPlants.map((eachPlant) => {
  //    return ( 
  //     <div key={eachPlant._id} >
  //       <span className="img-title">
  //         <br />
  //         {eachPlant.commonName}
  //         <br />({eachPlant.scientificName})
  //         <br />
  //       </span>
  //       <p className="img-description">
  //         Care Leve: {eachPlant.careLevel}
  //         <br />
  //         Light: {eachPlant.light}
  //         <br />
  //         Water: {eachPlant.water}
  //         <br />
  //         Soil: {eachPlant.soil}
  //         <br />
  //         Humidity: {eachPlant.humidity}
  //         <br />
  //         GrowthHabit: {eachPlant.growthHabit}
  //         <br />
  //         Propagation: {eachPlant.propagation}
  //         <br />
  //         Position: {eachPlant.position}
  //         <br />
  //         Toxicity: {eachPlant.toxicity}
  //       </p>
  //     </div>
  //    )});
  // };

  return (
    <div>
      <main>
        <ShowAllPlants />
      </main>
    </div>
  );
}

export default AllPlants;
