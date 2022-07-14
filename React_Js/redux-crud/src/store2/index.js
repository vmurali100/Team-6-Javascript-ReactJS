import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../component2/detailsSlice'
export const store2 = configureStore({
    reducer:{
        usersInfo:userReducer
    } 
})
export default store2