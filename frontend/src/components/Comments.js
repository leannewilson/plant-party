import React, { useState } from "react";
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-box"
          onChange={onChange}
          required
          placeholder="Comment here"
        />
        <button className="view-all-comments-btn">contribute</button>
      </form>
    </div>
  );
}

export default Comments;
