import { configureStore } from '@reduxjs/toolkit'
import userSlices1 from '../slices/userSlices1'

export const store1 = configureStore({
    reducer:{
        usersInfo:userSlices1
    }
})
export default store1