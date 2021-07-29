import React from "react";
import Modal from "react-modal";
import Forum from "./Forum";

function CommentModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
          comments go here
          {/* {Comment()} */}
          {/* {props.eachComment.comment} */}
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
