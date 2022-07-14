import {configureStore} from '@reduxjs/toolkit'
import  userReducer  from '../slices/userSlice2'
 const store1=configureStore({
    reducer:{
        userInfo:userReducer
    }
})
export default store1