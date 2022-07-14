import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice5";

const store5=configureStore({
    reducer:{
        userInfo:userReducer
    }
})
export default store5