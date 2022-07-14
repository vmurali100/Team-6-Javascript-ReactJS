import { createSlice } from "@reduxjs/toolkit";
 
 const initialState={
    teachers:[],
    isedit:false,
    editindex:null
}
const teacherSlice=createSlice({
    name:"teachers",
    initialState,
    reducers:{
        addteacer:(state,action)=>{
            state.teachers.push(action.payload)
        },
        deleteteacher:(state,action)=>{
            state.teachers.splice(action.payload,1)
        },
        editteacher:(state,action)=>{
            state.isedit=action.payload.isedit;
            state.editindex=action.payload.index
        },
        updateteacher:(state,action)=>{
            state.teachers[action.payload.index]=action.payload.data;
            state.isedit=action.payload.isedit
        }
    }
})
export const {addteacer,deleteteacher,editteacher,updateteacher}=teacherSlice.actions;
export default teacherSlice.reducer