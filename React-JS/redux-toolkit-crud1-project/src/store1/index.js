import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices1/userSlice1";

export const store1 = configureStore({
    reducer:{
        usersInfo:userReducer
    }
})

export default store1