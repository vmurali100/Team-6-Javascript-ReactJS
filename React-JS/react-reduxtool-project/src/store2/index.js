import { configureStore, createSlice } from "@reduxjs/toolkit";
import store from "../store";

const counterSlice = createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        incrementcount(state){
            state.counter += 1
        },
        decrementcount(state){
            state.counter -= 1
        },
        addBy(state,action){
            state.counter += action.payload
        }

    }
})

export const actions = counterSlice.actions;
const store2 = configureStore({
    reducer:counterSlice.reducer
})

export default store2