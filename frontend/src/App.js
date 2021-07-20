import logo from "./logo.svg";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Plant Partyyyy!</h1>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/add-plant"
          render={(props) => <AddPlant {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
