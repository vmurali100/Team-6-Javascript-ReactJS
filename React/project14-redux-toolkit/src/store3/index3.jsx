import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increase:(state)=>{
            state.counter+=1
        },
        decrease:(state)=>{
            state.counter-=1
        },
        addBy:(state,action)=>{
            state.counter+=action.payload
        }
    }
})
 export const actions=counterSlice.actions
 const store3= configureStore({
    reducer:counterSlice.reducer
 })
 export default store3