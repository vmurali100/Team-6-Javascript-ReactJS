import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"Counter",
    initialState:{counter:0},
    reducers:{
        IncrementCount(state){
            state.counter +=1
        },
        DecrementCount(state){
            state.counter -= 1
        },
        addBy(state,action){
            state.counter +=action.payload
        }
    }
})

export const actions = counterSlice.actions;
const store4=configureStore({
    reducer:counterSlice.reducer
})

export default store4