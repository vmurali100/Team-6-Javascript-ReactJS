import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        addBy: (state, action) => {
            state.count += action.payload
        }
    }
})
export const actions = counterSlice.actions
const storeTwo = configureStore({
    reducer: counterSlice.reducer
})
export default storeTwo