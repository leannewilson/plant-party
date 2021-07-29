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
    props.setShowHeart(false);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    props.setShowHeart(true);
    setIsOpen(false);
  }

  const styles = {
    zIndex: "100000",
    height: "60%",
    backgroundColor: "green",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "100",
    width: "400px",
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
      margin: "5em",
      maxWidth: "400px",
      maxHeight: "300px",
      margin: "auto",
    },
  };

  return (
    <div>
      <button
        className="openPlant "
        onClick={openModal}
        // style={{
        //   background: "none",
        //   border: "none",
        //   fontSize: "20px",
        //   width: "100%",
        //   height: "auto",
        //   // padding: "2em 0",
        //   cursor: "pointer",
        // }}
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
        <button onClick={closeModal}>X</button>
        <br />
        <br />
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props?.commonName}</h2>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "200px", float: "right" }}
            className="plant-img-main"
            src={props?.image}
            alt="green and growing"
          />
          <div
            className="img-description"
            style={{ float: "left", textAlign: "left" }}
          >
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
            GrowthHabit: {props?.growthHabit}
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
