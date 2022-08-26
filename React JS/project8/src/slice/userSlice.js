import {createSlice} from '@reduxjs/toolkit';

const initialState=[]
export const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        adduser:()=>{},
       deleteuser:()=>{},
       updateuser:()=>{},

    }
})
export const{adduser,deleteuser,updateuser,}=userSlice.actions;
 
export default userSlice.reducer