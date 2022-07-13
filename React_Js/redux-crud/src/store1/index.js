import { configureStore } from '@reduxjs/toolkit'
import personReducer from '../component1/personSlice'
export const store1=configureStore({
    reducer:{
        usersInfo:personReducer
    }
})
export default store1