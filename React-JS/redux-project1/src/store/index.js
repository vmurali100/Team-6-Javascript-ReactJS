import {configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
name:"counter",
initialstate:{counter:0},
reducers:{
    incremeantCount: (state)=>{
        state.counter += 1
    },
    decrementCount: (state)=>{
        state.counter -= 1
    },
    addBy: (state,action)=>{
        state.counter += action.payload
    }
}
})
export const actions=counterSlice.actions;
const store=configureStore({
    reducer:counterSlice.reducer
})

export default store