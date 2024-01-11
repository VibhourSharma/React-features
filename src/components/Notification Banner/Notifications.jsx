import React, { useState } from "react";
import "./Notification.css";

const Notification = () => {
  const [notification, setNotification] = useState({
    isVisible: false,
    type: "",
  });

  const showNotification = (type) => {
    setNotification({ isVisible: true, type });
    setTimeout(() => {
      setNotification({ isVisible: false, type: "" });
    }, 5000);
  };

  return (
    <div className="notification">
      <button
        className="notification-button success"
        onClick={() => showNotification("success")}
      >
        Show Success
      </button>
      <button
        className="notification-button warning"
        onClick={() => showNotification("warning")}
      >
        Show Warning
      </button>
      <button
        className="notification-button error"
        onClick={() => showNotification("error")}
      >
        Show Error
      </button>

      <div
        className={`notification-container ${
          notification.isVisible ? "visible" : "hidden"
        } ${notification.type}`}
      >
        {notification.type === "success" && "Success!"}
        {notification.type === "warning" && "Warning!"}
        {notification.type === "error" && "Error!"}
      </div>
    </div>
  );
};

export default Notification;
