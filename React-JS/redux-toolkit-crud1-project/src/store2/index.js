import { configureStore} from "@reduxjs/toolkit";
import  userReducer  from "../slices2/userSlice2";

 const store2 = configureStore({
    reducer:{
        usersInfo:userReducer
    }
})
export default store2