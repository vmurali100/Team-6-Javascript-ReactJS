import { configureStore } from "@reduxjs/toolkit";
import teacherreducer from "../slice3/teacherSlice";

const store3=configureStore({
    reducer:{
       teacherinfo:teacherreducer
    }
})
export default store3