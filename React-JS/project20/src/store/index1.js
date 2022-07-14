import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/UserSlice1';
 
const store1 = configureStore({
   reducer:{
    usersInfo: userReducer
   }
  })
export default store1;