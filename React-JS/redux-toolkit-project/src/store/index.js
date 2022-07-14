import { configureStore,createReducer } from '@reduxjs/toolkit';
import userReducer from '../slices/UserSlice';
 const store=configureStore({
    reducer:{
        userInfo:userReducer
    }
})
export default store