import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(({ notification }) => notification);

  const style = {
    border: "1px solid #bbb",
    padding: "8px",
  };

  return <div style={style}>{notification}</div>;
};

export default Notification;
