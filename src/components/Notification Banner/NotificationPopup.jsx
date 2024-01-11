import { useState, useEffect } from "react";
import "./Notification.css";

const NotificationPopup = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>{isVisible && <div className={`notification ${type}`}>{message}</div>}</>
  );
};

export default NotificationPopup;
