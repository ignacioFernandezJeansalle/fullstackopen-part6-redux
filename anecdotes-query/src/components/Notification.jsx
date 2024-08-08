import { useContext } from "react";
import NotificationContext from "../context/NotificationContext";

const Notification = () => {
  const { notification } = useContext(NotificationContext);

  if (notification === "") return null;

  return (
    <div
      style={{
        border: "solid",
        padding: 10,
        borderWidth: 1,
        marginBottom: 5,
      }}
    >
      {notification}
    </div>
  );
};

export default Notification;
