import React, { useEffect, useState } from "react";
import axios from "axios";
import heartOutline from "../assests/heartOutline.png";
import actions from "../api";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);
  let [savedPlants, setSavedPlants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getplantsfromserver").then((res) => {
      console.log(res.data);
      setAllPlants(res.data);
    });
  }, []);

  const savePlant = (favPlant) => {
    console.log(favPlant);
    // axios
    //   .post("http://localhost:5000/api/savedplants", { favPlant: favPlant })
    //   .then((res) => {
    //     console.log(res);
    //     setSavedPlants(favPlant);
    //   });
    actions.savePlant(favPlant).then((res) => {
      console.log(res);
      setSavedPlants(favPlant);
    });
  };
  console.log("plant saved", savedPlants);
  let ShowAllPlants = allPlants.map((eachPlant, i) => {
    return (
      <div key={eachPlant._id}>
        <button className="like-btn">
          <img
            onClick={() => savePlant(eachPlant)}
            src={heartOutline}
            style={{ width: "2em" }}
          />
        </button>
        <img
          style={{ width: "100%" }}
          className="plant-img"
          src={eachPlant.image}
          alt="green and growing"
        />
      </div>
    );
  });

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

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  // function reversePlants(arr){
  //   return arr.reverse()
  // }

  return (
    <div>
      <main>
        {shuffle(ShowAllPlants)}
        {/* {reversePlants(ShowAllPlants)} */}
      </main>
    </div>
  );
}

export default AllPlants;
