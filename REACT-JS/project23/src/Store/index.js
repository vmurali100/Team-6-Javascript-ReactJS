import { configureStore,createReducer } from '@reduxjs/toolkit'
import  userReducer from '../Slices/UserSlices'
const Store = configureStore({
    reducer:{
        usersInfo: userReducer
    }
})
export default Store