import NotificationPopup from "./NotificationPopup";
import "./Notification.css";

const Notifications = () => {
  return (
    <div>
      <NotificationPopup message="Success message" type="success" />
      <NotificationPopup message="Error message" type="error" />
      <NotificationPopup message="Warning message" type="warning" />
    </div>
  );
};

export default Notifications;
