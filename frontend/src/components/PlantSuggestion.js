import React from "react";

function PlantSuggestion(props) {
  return (
    <div className="container">
      <form className="suggestion_box" action="" method="post">
        <h3>We want to keep growing our collection!</h3>
        <h4>
          Please add any plants, blogs, videos, ideas, or feedback you have and
          we'll continue sprouting!
        </h4>
        <p>Thank you!</p>

        <textarea
          placeholder="Plant your ideas here"
          tabindex="5"
          name="suggestion_text"
          required
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
  );
}

export default PlantSuggestion;
