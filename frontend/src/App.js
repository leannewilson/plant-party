import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import TheContext from "./TheContext";
import actions from "./api";
import AddPlant from "./components/AddPlant";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import PlantDetails from "./components/PlantDetails";
import Header from "./components/Header";
import About from "./components/About";
import Resources from "./components/Resources";
import Forum from "./components/Forum";
import Footer from "./components/Footer";
import PlantSuggestion from "./components/PlantSuggestion";

function App() {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    try {
      let res = await actions.getUser();
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
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
            path="/resources"
            render={(props) => <Resources {...props} />}
          />
          <Route
            exact
            path="/plant-details"
            render={(props) => <PlantDetails {...props} />}
          />
          <Route
            exact
            path="/about-us"
            render={(props) => <About {...props} />}
          />
          <Route exact path="/forum" render={(props) => <Forum {...props} />} />
          <Route
            exact
            path="/plant-suggestion"
            render={(props) => <PlantSuggestion {...props} />}
          />
        </Switch>
      </div>
      <Footer />
    </TheContext.Provider>
  );
}

export default App;
