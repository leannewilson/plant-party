import React, { useEffect, useState, useContext } from "react";
import heartOutline from "../assests/heartOutline.png";
import redHeart from "../assests/redHeart.png";
import actions from "../api";
import TheContext from "../TheContext";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import PlantModal from "./PlantModal";
import openModal from "./PlantModal";

function AllPlants(props) {
  let [allPlants, setAllPlants] = useState([]);
  let { user, setUser } = useContext(TheContext);
  let history = useHistory();

  useEffect(() => {
    actions.getPlantsFromServer().then((res) => {
      // console.log(res.data);
      setAllPlants(res.data.reverse());
    });
  }, []);

  const savePlant = (favPlant) => {
    actions.savePlant(favPlant).then((res) => {
      console.log("added", res.data);
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

  const ShowButton = (props) => {
    //let likedIt = props.eachPlant.userIds.includes(user._id);
    let likedIt = user.favPlants.some(
      (each) => each._id === props.eachPlant._id
    );
    console.log(props.eachPlant.userIds, user._id, likedIt);
    return (
      <div>
        <img
          src={likedIt ? redHeart : heartOutline}
          style={{ width: "2em" }}
          alt="remove this plant from favorites"
          onClick={
            likedIt
              ? () => removePlant(props.eachPlant)
              : () => savePlant(props.eachPlant)
          }
        />
      </div>
    );
  };

  const ShowAllPlants = () => {
    return allPlants.map((eachPlant) => {
      return (
        <div key={eachPlant._id} className="hover">
          <button className="like-btn">
            <ShowButton eachPlant={eachPlant} />
          </button>
          <img
            style={{ width: "100%", overflowY: "hidden" }}
            className="plant-img-main"
            src={eachPlant.image}
            alt="green and growing"
            // onClick={() => PlantModal()}
          />

          <div onPress="{" className="hover-div">
            {/* <h2 className="plant-name">{eachPlant.commonName}</h2> */}
            <PlantModal {...eachPlant} />
          </div>
        </div>
      );
    });
  };

  const ShowAllPlantsNotLoggedIn = () => {
    return allPlants.map((eachPlant) => {
      return (
        <div key={eachPlant._id}>
          <button className="like-btn">
            <img
              className="saved-icon"
              src={heartOutline}
              style={{ width: "2em", overflowY: "hidden" }}
              alt="remove this plant from favorites"
              onClick={() => history.push("/auth")}
            />
          </button>

          <img
            style={{ width: "100%" }}
            className="plant-img-main"
            src={eachPlant.image}
            alt="green and growing"
            // onClick={openModal}
          />

          <div className="hover-div">
            {/* <h2 className="plant-name">{eachPlant.commonName}</h2> */}
            <PlantModal {...eachPlant} />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <main>
        {user?.name ? <ShowAllPlants /> : <ShowAllPlantsNotLoggedIn />}
      </main>
    </div>
  );
}

export default AllPlants;
