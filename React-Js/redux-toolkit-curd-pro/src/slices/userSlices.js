import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users:[],
    isEdit:false,
    editIndex:null
}
export const userSlices = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state,action) => { 
            state.users.push(action.payload)
        },
        deleteUser: (state,action) => { 
            state.users.splice(action.payload,1)
        },
        editUser:(state,action)=>{
            state.isEdit= action.payload.isEdit;
            state.editIndex =action.payload.index
        },
        updateUser: (state,action) => { 
            state.users[action.payload.index] =action.payload.data;
            state.isEdit = action.payload.isEdit
        }
    }
})

// export const actions = userSlices.actions
export const { addUser, deleteUser, updateUser,editUser } = userSlices.actions;

export default userSlices.reducer