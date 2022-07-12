import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        incrementcount: (state) => {
            state.counter += 1
        },
        decrementcount: (state) => {
            state.counter -= 1
        },
        AddBy: (state, actoins) => {
            state.counter += actoins.payload
        },
    },
})

export const actoins = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store