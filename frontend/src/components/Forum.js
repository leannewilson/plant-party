import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import actions from "../api";
import Comments from "./Comments";
import CommentModal from "./CommentModal";

function Forum(props) {
  let [post, setPost] = useState("");
  let history = useHistory();
  let [allPosts, setAllPosts] = useState([]);

  // SEND A POST
  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.addPost({ post });
    history.push("/forum");
    //console.log("plant!", res);
  };

  const getThePost = async () => {
    try {
      let res = await actions.getAllPosts();
      setAllPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // SHOW POSTS
  useEffect(() => {
    getThePost();
  }, []);

  let someStyling = {
    width: "75%",
    padding: "10px",
    margin: "50px auto",
    backgroundColor: "#618B4A80",
    borderRadius: "10px",
  };

  // COMMENTS

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <div style={someStyling} key={eachPost._id}>
        <div className="eachPost">
          <h2>{eachPost.post}</h2>
          <span style={{ marginLeft: ".5rem" }}>
            Posted by {eachPost.userId?.name}
          </span>
        </div>

        <div>
          <Comments eachPost={eachPost} />
        </div>
        <div
          style={{
            border: "1px dashed black",
            margin: "1em auto",
            padding: "1em",
            width: "75%",
          }}
        >
          {eachPost.comments?.comment}
        </div>
        <br />
        <div style={{ textAlign: "right" }}>
          {/* GET THE COMMENTERS NAME TO SHOW UP */}-{eachPost.userId?.name}
        </div>
        <div>
          <CommentModal eachPost={eachPost} />
        </div>
      </div>
    ));

  //console.log(allPosts);

  // MAIN RETURN

  return (
    <div>
      <div className="welcome-profile welcome-banner">
        <>Ask the plant community</>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <textarea
            className="post-box"
            cols="40"
            rows="5"
            onChange={handleChange}
            name="text"
            placeholder="Ask a question here"
            required
          />
          <button
            style={{ marginLeft: "10px" }}
            className="view-all-comments-btn"
          >
            Plant!
          </button>
        </form>
      </div>

      <hr
        style={{ width: "75%", border: "0.5px solid black", marginTop: "50px" }}
      />
      <div>
        <ShowPosts />
      </div>
    </div>
  );
}

export default Forum;
