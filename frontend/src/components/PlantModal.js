import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import actions from "../api";

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

function PlantModal(props) {
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

  const styles = {
    height: "60%",
    backgroundColor: "green",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    overflowY: "hidden",
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      zIndex: "100",
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
      margin: "5em",
      maxWidth: "400px",
      maxHeight: "350px",
      margin: "auto",
    },
  };

  return (
    <div>
      <button
        className="openPlant "
        onClick={openModal}
        style={{
          display: "inline-block",
          position: "relative",
          background: "none",
          border: "none",
          fontSize: "20px",
          width: "100%",
          height: "auto",
          // padding: "2em 0",
          margin: "-2em, 0",
          cursor: "pointer",
          overflowY: "hidden",
          zIndex: "10",
        }}
      >
        {props?.commonName}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
      >
        <button
          style={{ background: "none", border: "none", fontSize: "20px" }}
          onClick={closeModal}
        >
          X
        </button>

        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <div style={{ display: "flex" }}>
          <img
            style={{
              width: "200px",
              float: "right",
              overflowY: "hidden",
              paddingRight: "1em",
            }}
            src={props?.image}
            alt="green and growing"
          />
          <div
            className="img-description"
            style={{ float: "left", textAlign: "left", overflowY: "hidden" }}
          >
            <h3>{props?.commonName}</h3>
            Care Level: {props?.careLevel}
            <br />
            Light: {props?.light}
            <br />
            Water: {props?.water}
            <br />
            Soil: {props?.soil}
            <br />
            Humidity: {props?.humidity}
            <br />
            Growth Habit: {props?.growthHabit}
            <br />
            Propagation: {props?.propagation}
            <br />
            Position: {props?.position}
            <br />
            Toxicity: {props?.toxicity}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PlantModal;
