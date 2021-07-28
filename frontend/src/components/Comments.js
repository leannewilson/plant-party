import React, { useState, useEffect } from "react";
import actions from "../api";

function Comments(props) {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

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

  useEffect(() => {
    actions.getComments().then((res) => {
      setAllComments(res.data);
    });
  }, []);

  console.log(allComments);

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
