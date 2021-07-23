import { useState } from "react";
import axios from "axios";
import actions from "../api";

function AddPlant(props) {
  const [newPlant, setNewPlant] = useState({});

  const handleChange = (e) => {
    let plant = { ...newPlant };
    plant[e.target.name] = e.target.value;
    setNewPlant(plant);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("added", newPlant);
    actions.addPlant().then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "auto",
        }}
      >
        Names:
        <input
          name="commonName"
          onChange={handleChange}
          type="text"
          placeholder="Common name"
        />
        <input
          name="scientificName"
          onChange={handleChange}
          type="text"
          placeholder="Scientific name"
        />
        <label>
          Care level:
          <br></br>
          <select name="careLevel" multiple={true} onChange={handleChange}>
            <option value="Novice">Novice</option>
            <option value="Green thumb">Green Thumb</option>
            <option value="Expert">Expert</option>
          </select>
        </label>
        <label>
          Light:
          <br></br>
          <select name="light" multiple={true} onChange={handleChange}>
            <option value="Low-moderate">Low-Moderate</option>
            <option value="Bright-indirect">Bright, indirect</option>
            <option value="Full sun">Full sun</option>
          </select>
        </label>
        <label>
          Water:
          <br></br>
          <select name="water" multiple={true} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Low-moderate">Low-Moderate</option>
            <option value="Moderate">Moderate</option>
            <option value="Moderate-high">Moderate-High</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Soil:
          <br></br>
          <select name="soil" multiple={true} onChange={handleChange}>
            <option value="Well-draining">Well-draining</option>
            <option value="Moisture-retaining">Moisture-retaining </option>
            <option value="Coarse-sandy">Coarse + sandy </option>
          </select>
        </label>
        <label>
          Humidity:
          <br></br>
          <select name="humidity" multiple={true} onChange={handleChange}>
            <option value="None">None</option>
            <option value="Low">Low</option>
            <option value="Low-medium">Low-Medium</option>
            <option value="Medium">Medium</option>
            <option value="Medium-high">Medium-High</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Propagation:
          <br></br>
          <select name="propagation" multiple={true} onChange={handleChange}>
            <option value="Stem-cuttings">Stem cuttings </option>
            <option value="Plantlets-offsets">Plantlets + Offsets </option>
            <option value="Leaf-cuttings">Leaf cuttings</option>
            <option value="Division">Division</option>
          </select>
        </label>
        <label>
          Growth Habit:
          <br></br>
          <select name="growthHabit" multiple={true} onChange={handleChange}>
            <option value="Trailing">Trailing </option>
            <option value="Climbing">Climbing</option>
            <option value="Upright">Upright</option>
            <option value="Clumping">Clumping</option>
            <option value="Rosette">Rosette</option>
          </select>
        </label>
        <label>
          Position:
          <br></br>
          <select name="position" multiple={true} onChange={handleChange}>
            <option value="floor">Floor</option>
            <option value="Tabletop">Tabletop</option>
            <option value="Bookshelf-or-stand">Bookshelf or stand</option>
            <option value="Covered-balcony">Covered balcony </option>
          </select>
        </label>
        <label>
          Toxicity:
          <br></br>
          <select name="toxicity" onChange={handleChange}>
            <option value="Pet-friendly">Pet friendly </option>
            <option value="Mildly-toxic">Mildly toxic</option>
            <option value="Toxic">Toxic</option>
          </select>
        </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="images"
          name="image"
        />
        <button>Add Plant</button>
      </form>
    </div>
  );
}

export default AddPlant;
