import { useContext, useEffect } from "react";
import TheContext from "../TheContext";
import xicon from "../assests/xicon.png";
import actions from "../api";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

function Profile(props) {
  let { user, setUser } = useContext(TheContext);
  let history = useHistory();

  useEffect(() => {
    console.log(user);
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    history.push("/auth");
  };

  const removePlant = (favPlant) => {
    actions.removePlant(favPlant).then((res) => {
      console.log("removed", res.data, user);
      // let newUser = { ...user };
      setUser(res.data.user);
    });
  };

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
        {/* <button onClick={logOut}>Log out</button> */}
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLEID}
          buttonText="Logout"
          onLogoutSuccess={() => logOut()}
        ></GoogleLogout>
      </div>
      <div className="colums">
        {user?._id ? <ShowFavPlants /> : "Please log in"}
      </div>
    </div>
  );
}

export default Profile;
