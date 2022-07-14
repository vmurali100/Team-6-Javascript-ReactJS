import { createSlice } from "@reduxjs/toolkit";

const initialState={
    students:[],
    isedit:false,
    editindex:null
}
export const studentSlice=createSlice({
    name:"students",
    initialState,
    reducers:{
        addStudents:(state,action)=>{
            state.students.push(action.payload)

        },
        deleteStudents:(state,action)=>{
            state.students.splice(action.payload,1)

        },
        editStudents:(state,action)=>{
            state.isedit=action.payload.isedit;
            state.editindex=action.payload.index


        },
        updateStudents:(state,action)=>{
            state.students[action.payload.index]=action.payload.data;
            state.isedit=action.payload.isedit

        }
    }

})
export const{addStudents,deleteStudents,editStudents,updateStudents}=studentSlice.actions;
export default studentSlice.reducer