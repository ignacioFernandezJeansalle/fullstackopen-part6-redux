import { createContext, useReducer } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.payload;
    case "CLEAR_NOTIFICATION":
      return "";
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, "");

  const setNotificationWithTime = (content, time = 2000) => {
    notificationDispatch({ type: "SET_NOTIFICATION", payload: content });
    setTimeout(() => {
      notificationDispatch({ type: "CLEAR_NOTIFICATION" });
    }, time);
  };

  return (
    <NotificationContext.Provider value={{ notification, setNotificationWithTime }}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
