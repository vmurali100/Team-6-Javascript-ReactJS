import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        Increment(state){
            state.counter += 1
        },
        Decrement(state){
            state.counter -= 1
        },
        addBy(state,action){
            state.counter += action.payload
        }
    }
})
export const actions = counterSlice.actions;
const store5 =configureStore({
    reducer:counterSlice.reducer
})

export default store5