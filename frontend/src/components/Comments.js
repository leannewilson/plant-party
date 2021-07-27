import React, { useState } from "react";
import actions from "../api";

function Comments(props) {
  const [comment, setComment] = useState("");

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addComment({ comment }).then((res) => console.log(res));

    console.log("comment:", comment);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={onChange} />

        <button>send</button>
      </form>
    </div>
  );
}

export default Comments;
