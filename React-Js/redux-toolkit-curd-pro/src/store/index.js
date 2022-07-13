import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../slices/userSlices';
const store = configureStore({
    reducer:{
        usersInfo: useReducer
    }
})
export default store