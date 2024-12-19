import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postSlice"
import bookingReducer from "./slices/bookingSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    booking: bookingReducer,
  },
});

export default store;
