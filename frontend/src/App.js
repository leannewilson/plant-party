import { useState, useEffect } from "react";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Home from "./components/Home";
import TheContext from "./TheContext";
import actions from "./api";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
<<<<<<< HEAD
import PlantDetails from "./components/PlantDetails";
import Header from "./components/Header";
=======
import Footer from './components/Footer'
>>>>>>> 8e4a9b89ac83aedb9502b25a2173157ff8657cfd

function App() {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    let res = await actions.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getTheUser();
  }, []);

  return (
    <TheContext.Provider value={{ user, setUser, getTheUser }}>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/add-plant"
            render={(props) => <AddPlant {...props} />}
          />
          <Route exact path="/Auth" render={(props) => <Auth {...props} />} />
          <Route
            exact
            path="/Profile"
            render={(props) => <Profile {...props} />}
          />
          <Route
            exact
            path="/plant-details"
            render={(props) => <PlantDetails {...props} />}
          />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
