import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    users:[],
    isEdit:false,
    editIndex:null
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUsers:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
              state.users.splice(action.payload,1)
        },
        editUser:(state,action)=>{
            state.isEdit=action.payload.isEdit;
            state.editIndex=action.payload.index
        },
        updateUser:(state,action)=>{
            state.users[action.payload.index]=action.payload.data;
            state.isEdit=action.payload.isEdit
        }
    }
})

// export const actions = userSlice.actions,
export const {addUsers,deleteUser,editUser,updateUser} = userSlice.actions;

export default userSlice.reducer