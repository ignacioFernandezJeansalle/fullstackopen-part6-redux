import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: "Notificación inicial",
  /* reducers: {}, */
});

/* export const {} = notificationSlice.actions; */
export default notificationSlice.reducer;
