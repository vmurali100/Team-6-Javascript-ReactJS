import { configureStore } from '@reduxjs/toolkit'
import userSlices2 from '../slices/userSlices2'

export const store2 = configureStore({
    reducer:{
        userInfo:userSlices2
    }
})
export default store2