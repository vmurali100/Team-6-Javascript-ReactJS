import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        incrementcount:(state)=>{
            state.counter+=1
        },
        decrementcount:(state)=>{
            state.counter-=1
        },
        addby:(state,action)=>{
            state.counter+=action.payload
        }
    } 
})
export const actions=counterSlice.actions
const store4=configureStore({
    reducer:counterSlice.reducer
})
export default store4