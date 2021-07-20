import logo from "./logo.svg";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import AddPlant from "./components/AddPlant";

function App() {
  return (
    <div className="App">
      <h1>Plant Partyyyy!</h1>
      <Link to="/add-plant">Add a plant to our collection</Link>
      <Switch>
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
