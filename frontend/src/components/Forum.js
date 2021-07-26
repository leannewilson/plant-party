import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import actions from "../api";

function Forum(props) {
  let [post, setPost] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  //console.log(post);

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

  let someStyling = {
    width: '75%',
    padding: "10px",
    margin: "10px auto",
    border:'2px solid black',
    borderRadius: "0px 10px"
  };

  let sendComment = (e) => {
      e.preventDefault()
      history.push("/forum")
      console.log('sent')
  }

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <div style={someStyling}>
        <p className="eachPost" key={eachPost._id}>
          {eachPost.post}
          <br/>
          <span>{eachPost.userId?.name}</span>
        </p>
        <button>comments</button>
        <div>
            <form onSubmit={sendComment}>
                <textarea/>
                <button >send</button>
            </form>
        </div>
      </div>
    ));

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
