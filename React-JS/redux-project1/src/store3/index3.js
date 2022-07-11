import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        //Mutable- means we can change the value
        //Immutable- means we con't change value its freeze the value
        // we use the mutable method because we change the value
        incrementcount: (state) => {
            state.counter += 1
        },
        decrementcount: (state) => {
            state.counter -= 1
        },
        addBy: (state, action) => {
            state.counter += action.payload
        }
    }
})
export const actions = counterSlice.actions;
const store3 = configureStore({
    reducer: counterSlice.reducer
})
export default store3