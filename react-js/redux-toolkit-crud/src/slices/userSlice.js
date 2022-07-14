import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    users:[],
    isedit:false,
    editIndex:null
}
export const userSlice=createSlice({
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
           state.isedit=action.payload.isedit;
           state.editIndex=action.payload.index
        },
        updateUser:(state,action)=>{
            state.users[action.payload.index] = action.payload.data
            state.isedit=action.payload.isedit
        }
    }
});
export const {addUser,deleteUser,updateUser,editUser} = userSlice.actions;

export default userSlice.reducer