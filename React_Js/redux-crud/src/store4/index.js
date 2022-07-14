import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../component3/userSlice'
export const store4= configureStore({
    reducer:{
        usersInfo:userReducer
    }
})
export default store4