import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getpost = createAsyncThunk("post/getpost",async({id})=>{
    return fetch('https://jsonplaceholder.typicode.com/posts/${id}').then((res)=>
    res.json)
});

const postSlice =createSlice({
    name:"post",
    initialState:{
        post:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [getpost.pending]:(state,action)=>{
            state.loading=true;
        },
        [getpost.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [getpost.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})
export default postSlice.reducer;