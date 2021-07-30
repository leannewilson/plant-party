import React, { useState, useEffect, useContext } from "react";
import actions from "../api";
import suggestionBG from "../assests/suggestionBG.jpeg";
import TheContext from "../TheContext";

function PlantSuggestion(props) {
  let { user, setUser } = useContext(TheContext);
  const [suggestion, setSuggestion] = useState("");
  const [allSuggestions, setAllSuggestions] = useState([]);

  const handleChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(suggestion);
    actions.saveSuggestion({ suggestion }).then((res) => {
      console.log(res);

      // console.log("test suggestion");
    });
  };

  useEffect(() => {
    actions.getSuggestions().then((res) => {
      setAllSuggestions(res.data);
    });
  }, []);

  const removeSuggestion = (id) => {
    actions.removeSuggestion(id).then((res) => {
      console.log("removed");
    });
  };

  console.log(allSuggestions);

  const ShowSuggestions = () => {
    return allSuggestions.map((each) => {
      return (
        <div key={each._id}>
          {each.suggestion}
          <button
            onClick={() => removeSuggestion(each._id)}
            type="button"
            style={{ margin: "5px" }}
          >
            x
          </button>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${suggestionBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "100px",
        height: "63vh",
      }}
    >
      <div className="container">
        {user?.admin === true ? (
          <div className="suggestion-box">
            <span className="suggestion-results">
              <ShowSuggestions />
            </span>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="suggestion_box" method="post">
          <h3>We want to keep growing!</h3>
          <h4>
            Don't see a plant you want to add to your plantry? Tell us what
            you're looking for and we'll try to dig it up.
          </h4>
          <p>Thank you!</p>

          <textarea
            placeholder="Plant your ideas here"
            tabindex="5"
            name="suggestion_text"
            required
            onChange={handleChange}
          ></textarea>
          <br></br>
          <button
            name="submit"
            type="submit"
            id="suggestion_box"
            data-submit="...Sending"
            value="text to send"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlantSuggestion;
