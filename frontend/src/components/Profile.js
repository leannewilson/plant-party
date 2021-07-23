import { useContext, useState, useEffect } from "react";
import TheContext from "../TheContext";
import xicon from "../assests/xicon.png";
import actions from "../api";

function Profile(props) {
  let { user, setUser } = useContext(TheContext);

  useEffect(() => {
    console.log(user);
    ShowFavPlants();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const removePlant = (favPlant) => {
    actions.removePlant(favPlant).then((res) => {
      console.log("removed", res.data);
    });
  };
  console.log(user);
  const ShowFavPlants = () => {
    return user.favPlants.map((eachPlant) => {
      return (
        <div className="all-details" key={eachPlant._id}>
          <div>
            <button className="remove-icon">
              <img
                onClick={() => removePlant(eachPlant)}
                src={xicon}
                style={{ width: "2em" }}
                alt="remove from plantry"
              />
            </button>
          </div>
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
    <div>
      <div className="welcome-profile">
        <img
          src={user?.imageUrl}
          style={{ borderRadius: "5px" }}
          alt="google icon"
        />
        <h2>Hello, {user?.name}!</h2>
        <button onClick={logOut}>Log out</button>
      </div>
      <div className="colums">{user?._id ? <ShowFavPlants /> : "No user"}</div>
    </div>
  );
}

export default Profile;
