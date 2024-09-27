"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};
export const UserImageSlice = createSlice({
  name: "userImage",
  initialState,
  reducers: {
    getUserImage: (state, action) => {
      state.value = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { getUserImage } = UserImageSlice.actions;
export default UserImageSlice.reducer;
