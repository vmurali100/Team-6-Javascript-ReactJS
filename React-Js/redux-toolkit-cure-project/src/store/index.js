import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice'

export const store = configureStore({
    reducer:{
        userInfo:userSlice
    }
})
export default store