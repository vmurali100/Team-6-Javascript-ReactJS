import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice4";

const store4=configureStore({
    reducer:{
        personInfo:userReducer
    }
})
export default store4