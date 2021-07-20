import { useState } from "react";
import axios from "axios";

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
    axios.post("http://localhost:5000/add-plant", newPlant).then((res) => {
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
            <option value="novice">Novice</option>
            <option value="green-thumb">Green Thumb</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <label>
          Light:
          <br></br>
          <select name="light" multiple={true} onChange={handleChange}>
            <option value="low-moderate">Low-Moderate</option>
            <option value="bright-indirect">Bright, indirect</option>
            <option value="full-sun">Full sun</option>
          </select>
        </label>
        <label>
          Water:
          <br></br>
          <select name="water" multiple={true} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="low-moderate">Low-Moderate</option>
            <option value="moderate">Moderate</option>
            <option value="moderate-high">Moderate-High</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Soil:
          <br></br>
          <select name="soil" multiple={true} onChange={handleChange}>
            <option value="well-draining">Well-draining</option>
            <option value="moisture-retaining">Moisture-retaining </option>
            <option value="coarse-sandy">Coarse + sandy </option>
          </select>
        </label>
        <label>
          Humidity:
          <br></br>
          <select name="humidity" multiple={true} onChange={handleChange}>
            <option value="none">None</option>
            <option value="low">Low</option>
            <option value="low-medium">Low-Medium</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Propagation:
          <br></br>
          <select name="propagation" multiple={true} onChange={handleChange}>
            <option value="stem-cuttings">Stem cuttings </option>
            <option value="plantlets-offsets">Plantlets + Offsets </option>
            <option value="leaf-cuttings">Leaf cuttings</option>
            <option value="division">Division</option>
          </select>
        </label>
        <label>
          Growth Habit:
          <br></br>
          <select name="growthHabit" multiple={true} onChange={handleChange}>
            <option value="trailing">Trailing </option>
            <option value="climbing">Climbing</option>
            <option value="upright">Upright</option>
            <option value="clumping">Clumping</option>
            <option value="rosette">Rosette</option>
          </select>
        </label>
        <label>
          Position:
          <br></br>
          <select name="position" multiple={true} onChange={handleChange}>
            <option value="floor">Floor</option>
            <option value="tabletop">Tabletop</option>
            <option value="bookshelf-or-stand">Bookshelf or stand</option>
            <option value="covered-balcony">Covered balcony </option>
          </select>
        </label>
        <label>
          Toxicity:
          <br></br>
          <select name="toxicity" multiple={true} onChange={handleChange}>
            <option value="pet-friendly">Pet friendly </option>
            <option value="mildly-toxic">Mildly toxic</option>
            <option value="toxic">Toxic</option>
          </select>
        </label>
        <input onChange={handleChange} type="text" placeholder="images" />
        <button>Add Plant</button>
      </form>
    </div>
  );
}

export default AddPlant;
