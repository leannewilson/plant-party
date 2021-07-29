import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
    subtitle.style.color = '#f00';
  }

  function closeModal() {
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
  };

  return (
    <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={styles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              {props.eachPlant.commonName}
            </h2>
            <button onClick={closeModal}>close</button>
            <div>
              <div
                className="img-description"
                style={{ float: "left", textAlign: "left" }}
              >
                Care Level: {props.eachPlant.careLevel}
                <br />
                Light: {props.eachPlant.light}
                <br />
                Water: {props.eachPlant.water}
                <br />
                Soil: {props.eachPlant.soil}
                <br />
                Humidity: {props.eachPlant.humidity}
                <br />
                GrowthHabit: {props.eachPlant.growthHabit}
                <br />
                Propagation: {props.eachPlant.propagation}
                <br />
                Position: {props.eachPlant.position}
                <br />
                Toxicity: {props.eachPlant.toxicity}
              </div>
            </div>
            <img
              style={{ width: "50%", float: "right" }}
              className="plant-img-main"
              src={props.eachPlant.image}
              alt="green and growing"
            />
          </Modal>
    </div>
  );
}

export default PlantModal