import React, { useEffect, useState } from "react";
import axios from "axios";
import heartOutline from "../assests/heartOutline.png";
import redHeart from "../assests/redHeart.png";
import actions from "../api";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);
  let [likes, setLikes] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getplantsfromserver").then((res) => {
      console.log(res.data);
      setAllPlants(res.data);
    });
  }, []);

  const savePlant = (favPlant) => {
    console.log(favPlant, favPlant.userIds);
    actions.savePlant(favPlant).then((res) => {
      console.log(res);
    });
  };

  const removePlant = (favPlant) => {
    console.log(favPlant, favPlant.userIds);
    actions.removePlant(favPlant).then((res) => {
      console.log(res);
      setLikes(true);
    });
  };

  // const LikeButton = () => {
  //   if (likes === false){

  //   }
  // }

  let ShowAllPlants = allPlants.map((eachPlant, i) => {
    return (
      <div key={eachPlant._id}>
        <button className="like-btn">
          <img
            className="saved-icon"
            onClick={() => savePlant(eachPlant)}
            src={heartOutline}
            style={{ width: "2em" }}
            alt="save this plant cto favorites"
          />
        </button>

        <button className="like-btn">
          <img
            className="saved-icon"
            onClick={() => removePlant(eachPlant)}
            src={redHeart}
            style={{ width: "2em" }}
            alt="remove this plant from favorites"
          />
        </button>

        <img
          style={{ width: "100%" }}
          className="plant-img-main"
          src={eachPlant.image}
          alt="green and growing"
        />
      </div>
    );
  });

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
