import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[],
    isEdit:false,
    editIndex:null
}
export const personSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addPerson:(state,action)=>{
            state.users.push(action.payload)
        },
        deletePerson:(state,action)=>{
            state.users.splice(action.payload,1)
        },
        updatePerson:(state,action)=>{
            state.users[action.payload.index]=action.payload.data
            state.isEdit=action.payload.isEdit
        },
        editPerson:(state,action)=>{
            state.isEdit=action.payload.isEdit;
            state.editIndex=action.payload.index
        }
    }
})
export const {addPerson,deletePerson,updatePerson,editPerson}=personSlice.actions
export default personSlice.reducer