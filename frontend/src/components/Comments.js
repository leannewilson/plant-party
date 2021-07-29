import React, { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";

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

  const ShowComments = () => {
    return allComments.reverse().map((eachComment) => {
      if (eachComment.postId === props.eachPost._id) {
        return (
          <div>
            <Link to="/forum"></Link>
            <span>{eachComment.comment}</span>
            <br></br>
            <h4 style={{ textAlign: "right" }}>
              -{props.eachPost.userId?.name}
            </h4>
            {/* <h4 style={{ textAlign: "right" }}>on {eachComment.created}</h4> */}
            <button>{eachComment.postId.length} Comments</button>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={onChange} />
        <button>send</button>

        <ShowComments />
      </form>
    </div>
  );
}

export default Comments;
