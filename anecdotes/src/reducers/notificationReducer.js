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

export const setNotificationWithTime = (dispatch, content, time = 5000) => {
  dispatch(setNotification(content));
  setTimeout(() => {
    dispatch(clearNotification());
  }, time);
};
