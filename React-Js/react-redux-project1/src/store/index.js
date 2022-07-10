import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        incrementCount: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counter += 1
        },
        decrementCount: (state) => {
            state.counter -= 1
        },
        addBy: (state, action) => {
            state.counter += action.payload
        },
    },
})

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;