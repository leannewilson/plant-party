import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import actions from "../api";
import Comments from "./Comments";

function Forum(props) {
  // STATES
  let [post, setPost] = useState("");
  let history = useHistory();
  let [allPosts, setAllPosts] = useState([]);

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

  // SHOW POSTS

  useEffect(() => {
    actions.getAllPosts().then((res) => {
      setAllPosts(res.data);
    });
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
      <div style={someStyling} key={eachPost._id}>
        <p className="eachPost">
          <h2>{eachPost.post}</h2>

          <h2>{eachPost.image}</h2>
          <br />
          <span style={{ marginLeft: ".5rem" }}>
            Posted by {eachPost.userId?.name}
          </span>
        </p>

        <div>
          <Comments eachPost={eachPost} />
        </div>
      </div>
    ));

  // MAIN RETURN

  return (
    <div>
      <>Create post</>
      <form onSubmit={handleSubmit}>
        <textarea cols="40" rows="5" onChange={handleChange} name="text" />

        <button>Plant!</button>
      </form>

      <div>
        <ShowPosts />
      </div>
    </div>
  );
}

export default Forum;
