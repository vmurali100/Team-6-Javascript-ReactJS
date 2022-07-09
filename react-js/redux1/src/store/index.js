import { configureStore, createSlice} from '@reduxjs/toolkit';
const counterSlice=createSlice({
  name:'counter',
  initialState:{counter:0},
  reducers:{
    incrementCount:(state)=>{
      state.counter += 1
    },
    decrementCount:(state)=>{
         state.counter -= 1
    },
    addBy:(state,action)=>{
         state.counter += action.payload
    }
  }
})
export const actions=counterSlice.actions;
const store=configureStore({
    reducer:counterSlice.reducer
})
export default store