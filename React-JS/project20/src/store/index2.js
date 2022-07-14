import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/UserSlice2';

const store2 = configureStore({
    reducer:{
        cartInfo:userReducer

    }
})
export default store2;