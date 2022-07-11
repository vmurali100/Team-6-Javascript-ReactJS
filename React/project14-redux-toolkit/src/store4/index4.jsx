import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "count",
    initialState: { count: 0 },
    reducers: {
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1
        },
        addBy:(state,action)=>{
            state.count+=action.payload
        }
    }
})
export const actions=counterSlice.actions;
const store4=configureStore({
    reducer:counterSlice.reducer
})
export default store4