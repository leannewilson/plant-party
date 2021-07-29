import React, { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import CommentModal from "./CommentModal";

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

  const ShowOneComment = () => {
    return allComments.reverse().map((eachComment) => {
      if (eachComment.postId === props.eachPost._id) {
        return (
          <div>
            <span>{eachComment.comment}</span>
            <br></br>
            <h4 style={{ textAlign: "right" }}>-{eachComment.userId?.name}</h4>
            {/* <h4 style={{ textAlign: "right" }}>on {eachComment.created}</h4> */}
          </div>
        );
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={onChange} required />
        <button>contribute</button>

        {/* <ShowOneComment /> */}
      </form>
    </div>
  );
}

export default Comments;
