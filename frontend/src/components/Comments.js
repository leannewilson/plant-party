import React, { useState, useEffect } from "react";
import actions from "../api";

function Comments(props) {
  const [comment, setComment] = useState("");
  const onChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions
      .addComment({ comment, postId: props.eachPost._id })
      .then((res) => console.log(res));

    console.log("comment:", comment);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={onChange} required />
        <button>contribute</button>
      </form>
    </div>
  );
}

export default Comments;
