import { useContext, useState, useEffect } from "react";
import TheContext from "../TheContext";

function Profile(props) {
  let { user, setUser } = useContext(TheContext);

  useEffect(() => {
    console.log(user);
    ShowFavPlants()
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  console.log(user);

  const ShowFavPlants = () => {
    return user.favPlants.map((eachPlant) => {
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
    <div>
      <div className="user-header">
        <img
          src={user?.imageUrl}
          style={{ borderRadius: "10%"}}
          alt="google icon"
          className="userImg"
        />
        <div>
          <h2 className="userName">Hello, {user?.name}!</h2>
          <p>Number of plants: {user?.favPlants.length}</p>
          <button onClick={logOut} className='log-out'>Log out</button>
        </div>
      </div>
      <div>
        <ShowFavPlants />
      </div>
    </div>
  );
}

export default Profile;
