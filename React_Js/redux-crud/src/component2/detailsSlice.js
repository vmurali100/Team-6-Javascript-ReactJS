import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[],
    isEdit:false,
    editIndex:null
}
export const detailsSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addDetails:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteDetails:(state,action)=>{
            state.users.splice(action.payload,1)
        },
        editDetails:(state,action)=>{
            state.isEdit=action.payload.isEdit;
            state.editIndex=action.payload.index
        },
        updateDetails:(state,action)=>{
            state.users[action.payload.index]=action.payload.data
            state.isEdit=[action.payload.isEdit]
        }
    }
})
export const {addDetails,deleteDetails,editDetails,updateDetails} =detailsSlice.actions
export default detailsSlice.reducer