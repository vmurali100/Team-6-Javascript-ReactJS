import { configureStore ,createReducer} from '@reduxjs/toolkit'
import { useReducer } from './'
export const store=configureStore({
    reducer:{
        userInfo:useReducer
    }
})
export default store