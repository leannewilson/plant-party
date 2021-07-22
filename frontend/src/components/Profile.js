import { useContext, useState, useEffect } from "react";
import TheContext from "../TheContext";
import actions from "../api";

function Profile(props) {
  let { user, setUser } = useContext(TheContext);

  useEffect(() => {
    console.log(user);
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const ShowFavPlants = () => {
    return user.favPlants.map((eachPlant) => {
      return <div>{eachPlant.commonName}</div>;
    });
  };

  return (
    <div>
      <img
        src={user?.imageUrl}
        style={{ borderRadius: "5px" }}
        alt="google icon"
      />
      <h2>Hello, {user?.name}!</h2>
      <button onClick={logOut}>Log out</button>

      <ShowFavPlants />
    </div>
  );
}

export default Profile;
