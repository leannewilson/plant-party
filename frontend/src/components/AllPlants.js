import React, { useEffect, useState } from "react";
import axios from "axios";
import heartOutline from "../assests/heartOutline.png";
import redHeart from "../assests/redHeart.png";
import actions from "../api";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);
  let [likedPlants, setLikedPlants] = useState(false);

  useEffect(() => {
    actions.getPlantsFromServer().then((res) => {
      console.log(res.data);
      setAllPlants(res.data);
    });
  }, []);

  const savePlant = (favPlant) => {
    actions.savePlant(favPlant).then((res) => {
      console.log("added", res.data);
    });
    setLikedPlants(true);
  };

  console.log(likedPlants);

  const removePlant = (favPlant) => {
    actions.removePlant(favPlant).then((res) => {
      console.log("removed", res.data);
    });
    setLikedPlants(false);
  };

  const ShowButton = () => {
    if (likedPlants === false) {
      return (
        <div>
          <img
            className="saved-icon"
            onClick={() => savePlant(props.eachPlant)}
            src={heartOutline}
            style={{ width: "2em" }}
            alt="save this plant to favorites"
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            className="saved-icon"
            onClick={() => removePlant(props.eachPlant)}
            src={redHeart}
            style={{ width: "2em" }}
            alt="remove this plant from favorites"
          />
        </div>
      );
    }
  };

  let ShowAllPlants = allPlants.map((eachPlant) => {
    return (
      <div key={eachPlant._id}>
        <button className="like-btn">
          <ShowButton />
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

  // function shuffle(array) {
  //   var currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // }

  function reversePlants(arr) {
    return arr.reverse();
  }

  return (
    <div>
      <main>
        {/* {shuffle(ShowAllPlants)} */}
        {reversePlants(ShowAllPlants)}
      </main>
    </div>
  );
}

export default AllPlants;
