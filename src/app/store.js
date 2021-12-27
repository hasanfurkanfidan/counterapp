import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

//feature : Özellik:post,user  her bir feature için bir reducer , action ve action creater oluşturmalısın
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
