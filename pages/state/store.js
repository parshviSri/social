import { configureStore } from "@reduxjs/toolkit";
import combinedReducer from './reducer'; 
export default configureStore({
  reducer: {
    reducer : combinedReducer
  },
});
