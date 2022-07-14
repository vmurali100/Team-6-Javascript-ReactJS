import { createSlice } from "@reduxjs/toolkit";

const initialState={
    datas:[],
    isedit:false,
    editindex:null
}
export const dataSlice=createSlice({
    name:"datas",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.datas.push(action.payload)
        },
        deleteData:(state,action)=>{
           state.datas.splice(action.payload,1)
        },
        EditData:(state,action)=>{
           state.isedit=action.payload.isedit;
           state.editindex=action.payload.index
        },
        UpdateData:(state,action)=>{
            state.datas[action.payload.index]=action.payload.dat
            state.isedit=action.payload.isedit

        }

    }
})
export const {addData,deleteData,EditData,UpdateData} = dataSlice.actions

export default dataSlice.reducer