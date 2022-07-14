import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice3";

const store2=configureStore({
    reducer:{
        userInfo:userReducer
    }
})
export default store2