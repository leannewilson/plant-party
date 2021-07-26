import React, { useEffect, useState, useContext } from "react";
import heartOutline from "../assests/heartOutline.png";
import redHeart from "../assests/redHeart.png";
import actions from "../api";
import TheContext from "../TheContext";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);
  let { user, setUser } = useContext(TheContext);

  useEffect(() => {
    actions.getPlantsFromServer().then((res) => {
      console.log(res.data);
      setAllPlants(res.data);
    });
  }, []);

  const ShowButton = (props) => {
    console.log("?", user.favPlants, props.eachPlant._id);
    let likedPlants = user.favPlants.some(
      (eachPlant) => eachPlant._id === props.eachPlant._id
    );
    console.log(likedPlants);

    const savePlant = (favPlant) => {
      actions.savePlant(favPlant).then((res) => {
        console.log("added", res.data, user, setUser);
        // let newUser = { ...user };

        setUser(res.data.user);
      });
    };

    const removePlant = (favPlant) => {
      actions.removePlant(favPlant).then((res) => {
        console.log("removed", res.data, user, setUser);
        // let newUser = { ...user };
        setUser(res.data.user);
      });
    };

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
          <ShowButton eachPlant={eachPlant} />
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
        {user.favPlants && reversePlants(ShowAllPlants)}
      </main>
    </div>
  );
}

export default AllPlants;
