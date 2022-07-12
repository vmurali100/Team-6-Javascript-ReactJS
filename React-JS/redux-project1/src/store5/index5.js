import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        incrementCount:(state)=>{
            state.counter+=1
        },
        decrememtCount:(state)=>{
            state.counter-=1
        },
        addby:(state,action)=>{
            state.counter+=action.payload
        }
    }
})
export const action=counterSlice.actions
const store5=configureStore(
    {reducer:createSlice.reducer}
)
export default store5