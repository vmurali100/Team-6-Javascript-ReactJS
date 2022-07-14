import { configureStore } from "@reduxjs/toolkit";
import studentreducer  from "../slice2/studentSlice";

const store2=configureStore({
    reducer:{
        studentsinfo:studentreducer
    }
})
export default store2