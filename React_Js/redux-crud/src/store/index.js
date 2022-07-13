import {configureStore}from '@reduxjs/toolkit'
import useReducer from '../component/userSlice'
export const store=configureStore({
   reducer:{
    usersInfo:useReducer
   }
})
export default store