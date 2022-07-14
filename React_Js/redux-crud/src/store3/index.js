import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../component3/userSlice'
export const store3= configureStore({
    reducer:{
        usersInfo:userReducer
    }
})
export default store3