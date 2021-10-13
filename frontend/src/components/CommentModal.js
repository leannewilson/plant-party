import React, { useState, useEffect } from "react";
import actions from "../api";
import Modal from "react-modal";
import Comments from "./Comments";

function CommentModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [allComments, setAllComments] = useState([]);

  // which useEffect is better????

  // useEffect(() => {
  //   actions.getComments().then((res) => {
  //     setAllComments(res.data);
  //   });
  // }, [props, allComments]);

  const getTheComments = async () => {
    try {
      let res = await actions.getComments();
      setAllComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTheComments();
  }, []);

  const ShowAllComments = () => {
    //console.log(allComments);
    return allComments.reverse().map((eachComment) => {
      if (eachComment.postId === props.eachPost._id) {
        return (
          <div
            key={eachComment._id}
            style={{
              border: "1px dashed black",
              margin: "1em",
              padding: "1em",
            }}
          >
            <ul>
              <li className="forum-modal-comments">{eachComment.comment}</li>
            </ul>

            <h4 style={{ textAlign: "right" }}>-{eachComment.userId?.name}</h4>
          </div>
        );
      }
      return null;
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#618B4A";
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="view-all-comments-btn">
        See all comments
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            maxWidth: "500px",
            margin: "auto",
          },
        }}
      >
        <button onClick={closeModal}>X</button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          {props.eachPost.post}
        </h2>
        <div>
          <ShowAllComments />
        </div>
        <div>
          <Comments />
        </div>
      </Modal>
    </div>
  );
}

export default CommentModal;
