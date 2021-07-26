import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import actions from "../api";

function Forum(props) {
  let [post, setPost] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  console.log(post);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await actions.addPost({ post });
    history.push("/forum");
    console.log("plant!");
  };

  let [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    let res = await actions.getAllPosts();
    setAllPosts(res.data);
  }, []);

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <li key={eachPost._id}>
        {" "}
        {eachPost.post} <i>created by ...{eachPost.userId?.name}</i>
      </li>
    ));

  return (
    <div style={{ border: "1px solid black" }}>
      <div className="message-box">
        <div>Create post</div>
        <form onSubmit={handleSubmit}>
          <textarea cols="40" rows="5" onChange={handleChange} />
          <button>Plant!</button>
        </form>
        <div>
          <h3>POSTS</h3>
          <div>
            all the posts here
            <ShowPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
