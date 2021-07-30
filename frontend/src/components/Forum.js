import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import actions from "../api";
import Comments from "./Comments";
import CommentModal from "./CommentModal";

function Forum(props) {
  // STATES
  let [post, setPost] = useState("");
  let history = useHistory();
  let [allPosts, setAllPosts] = useState([]);
  let [allComments, setAllComments] = useState([]);
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

    actions.getComments().then((res) => {
      setAllComments(res.data);
    });

    console.log(allComments);
  }, []);

  let someStyling = {
    width: "75%",
    padding: "10px",
    margin: "50px auto",
    // border: "2px solid #618B4A80",
    backgroundColor: "#618B4A80",
    borderRadius: '10px'
  };

    // COMMENTS

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <div style={someStyling} key={eachPost._id}>
        <p className="eachPost">
          <h2>{eachPost.post}</h2>
          <span style={{ marginLeft: ".5rem" }}>
            Posted by {eachPost.userId?.name}
          </span>
        </p>

        <div>
          <Comments eachPost={eachPost} />
          <h4
            style={{
              // backgroundColor: "#618B4A80"
              border: "1px dashed black",
              margin: "1em",
              padding: "1em",
            }}
          >
            {eachPost.comments?.comment}
            <br />
            <div style={{ textAlign: "right" }}>
              {/* GET THE COMMENTERS NAME TO SHOW UP */}-{eachPost.userId?.name}
            </div>
          </h4>
          <CommentModal eachPost={eachPost} />
        </div>
      </div>
    ));

  console.log(allPosts);





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
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center'}}>
          <textarea
            className="post-box"
            cols="40"
            rows="5"
            onChange={handleChange}
            name="text"
            placeholder="Ask a question here"
            required
          />
          <button style={{marginLeft: '10px'}} className="view-all-comments-btn">Plant!</button>
        </form>
      </div>

<hr style={{width: '75%', border:'0.5px solid black', marginTop:'50px'}}/>

      <div>
        <ShowPosts />
      </div>
    </div>
  );
}

export default Forum;
