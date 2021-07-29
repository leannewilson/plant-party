import React, { useState, useEffect } from "react";
import actions from "../api";
import Modal from "react-modal";

function CommentModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    actions.getComments().then((res) => {
      setAllComments(res.data);
    });
  }, []);

  const ShowAllComments = () => {
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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>All comments</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          {props.eachPost.post}
        </h2>

        <div>
          <ShowAllComments />
        </div>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
  return <div></div>;
}

export default CommentModal;
