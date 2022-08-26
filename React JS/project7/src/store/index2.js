import {configureStore,createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    name: 'counter',
    initialState:{counter:0},
    reducers:{
        increamentcount:(state)=>{
            state.counter +=1
        },
        decrementcount: (state)=>{
            state.counter -=1
        },
        addby: (state,action)=>{
            state.counter +=action.payload
        },
    }
})

export const actions =counterSlice.actions;
const store =configureStore({
    reducer:counterSlice.reducer
})
export default store;