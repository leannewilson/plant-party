import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import actions from "../api";

function Forum(props) {
  
    // STATES

  let [post, setPost] = useState("");
  let history = useHistory();
  let [allPosts, setAllPosts] = useState([]);
  let [comment, setComment] = useState([]);

  // SEND A POST
  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await actions.addPost({ post });
    history.push("/forum");
    console.log("plant!");
  };

  // ADD A COMMENT

  let sendComment = async (e) => {
    e.preventDefault();
    let res = await actions.addComment({ comment });
    history.push("/forum");
    console.log("sent");
  };

  // SHOW POSTS

  useEffect(async () => {
    let res = await actions.getAllPosts();
    setAllPosts(res.data);
  }, []);

  let someStyling = {
    width: "75%",
    padding: "10px",
    margin: "10px auto",
    border: "2px solid black",
    borderRadius: "0px 10px",
  };

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <div style={someStyling}>
        <p className="eachPost" key={eachPost._id}>
          {eachPost.post}
          <br />
          <span>{eachPost.userId?.name}</span>
        </p>
        <button>comments</button>
        <div>
          <form onSubmit={sendComment}>
            <textarea/>
            <button>send</button>
          </form>
        </div>
      </div>
    ));

  // MAIN RETURN

  return (
    <div>
      <>Create post</>
      <form onSubmit={handleSubmit}>
        <textarea cols="40" rows="5" onChange={handleChange} />
        <button>Plant!</button>
      </form>

      <div>
        <ShowPosts />
      </div>
    </div>
  );
}

export default Forum;
