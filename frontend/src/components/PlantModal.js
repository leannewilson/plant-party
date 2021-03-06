import React from "react";
import Modal from "react-modal";

function PlantModal(props) {
  let subtitle;
  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal() {
    setIsOpen1(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#00000";
  }

  function closeModal() {
    setIsOpen1(false);
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
      maxWidth: "400px",
      maxHeight: "350px",
      margin: "auto",
    },
  };

  return (
    <div>
      <div onClick={openModal} style={{ background: "none" }}>
        <button
          className="openPlant "
          style={{
            display: "flow-root",
            position: "relative",
            background: "none",
            border: "none",
            fontSize: "20px",
            width: "100%",
            height: "auto",
            margin: "-2em, 0",
            cursor: "pointer",
            overflowY: "hidden",
            zIndex: "20",
          }}
        >
          {props?.commonName}
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen1}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
          }}
          onClick={closeModal}
        >
          X
        </button>

        <div style={{ display: "flex" }}>
          <img
            style={{
              width: "200px",
              float: "right",
              overflowY: "hidden",
              paddingRight: "1em",
              paddingTop: "1em",
            }}
            src={props?.image}
            alt="green and growing"
          />
          <div
            className="img-description"
            style={{ float: "left", textAlign: "left", overflowY: "hidden" }}
          >
            <h3 ref={(_subtitle) => (subtitle = _subtitle)}>
              {props?.commonName}
            </h3>
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
