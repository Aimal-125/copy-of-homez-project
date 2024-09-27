import { configureStore } from "@reduxjs/toolkit";
import UserImageSlice from "./features/userImageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userImage: UserImageSlice,
    },
  });
};
