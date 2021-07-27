import React, { useState } from "react";
import actions from "../api";
import suggestionBG from "../assests/suggestionBG.jpeg";

function PlantSuggestion(props) {
  const [suggestion, setSuggestion] = useState("");
  // const [allSuggestions, setAllSuggestions] = useState([]);

  const handleChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(suggestion);
    actions.saveSuggestion({ suggestion }).then((res) => {
      console.log(res);

      console.log("test suggestion");
    });
  };

  // useEffect(() => {
  //   actions.getSuggestions().then((res) => {
  //     setAllSuggestions(res.data);
  //   });
  // }, []);

  // const ShowSuggestions = () => {
  //   return allSuggestions.map((each) => {
  //     return <div>{each.suggestion}</div>;
  //   });
  // };
  // console.log("sugg", allSuggestions.suggestion);

  return (
    <div
      style={{
        backgroundImage: `url(${suggestionBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "100px",
      }}
    >
      <div className="container">
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
        {/* <ShowSuggestions /> */}
      </div>
    </div>
  );
}

export default PlantSuggestion;
