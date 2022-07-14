import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    users:[],
    isEdit:false,
    editIndex:null
}
export const UserSlice1 = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
            state.users.splice(action.payload,1)
        },
        editUser:(state,action)=>{
            state.isEdit=action.payload.isEdit;
            state.editIndex=action.payload.index;

        },

        updateUser:(state,action)=>{
            state.users[action.payload.index] = action.payload.data;
            state.isEdit = action.payload.isEdit
        }
    }
})

// export const actions = userSlice.actions

export const {addUser,deleteUser,editUser,updateUser} = UserSlice1.actions;
export default UserSlice1.reducer