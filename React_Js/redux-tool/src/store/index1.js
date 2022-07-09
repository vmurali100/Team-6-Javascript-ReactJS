import {configureStore,createSlice}from '@reduxjs/toolkit'
const couterSlice=createSlice({
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
        },
    },
})
export const actions=couterSlice.actions
const store=configureStore({
    reducer:couterSlice.reducer
})
export default store;