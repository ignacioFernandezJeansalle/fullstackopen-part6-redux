import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification: (state, action) => action.payload,
    clearNotification: () => "",
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

export const setNotificationWithTime = (content, seconds = 2) => {
  return (dispatch) => {
    const milliseconds = seconds * 1000;
    dispatch(setNotification(content));
    setTimeout(() => {
      dispatch(clearNotification());
    }, milliseconds);
  };
};
