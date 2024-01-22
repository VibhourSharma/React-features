import React, { useState } from "react";
import "./Modal.css";

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const URL =
    "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card-background">
        <div className="card">
          <div className="image-container">
            <img src={URL} alt="Lion Image" />
          </div>
          <h2>Lion</h2>
          <p>Day:2 - Click on Description button to open Modal</p>
          <button onClick={openModal}>Description</button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Lion</h2>
            <p>
              With its regal mane and powerful presence, the lion stands as a
              symbol of majestic strength in the animal kingdom. Roaming the
              savannah with a fierce grace, it commands respect with each
              stride.
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
