import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        adduser:(state,action)=>{
            state.push(action.payload)
        },
        deleteUser:()=>{},
        editUser:()=>{},
        updateUser:()=>{}
    }
})

// export const actions = userSlice.actions;

export const {adduser,deleteUser,editUser,updateUser} = userSlice.actions

export default userSlice.reducer  