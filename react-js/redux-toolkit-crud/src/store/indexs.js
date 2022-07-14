import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
 const store=configureStore({
    reducer:{
        usersinfo:userReducer
    }
   


})
export default store