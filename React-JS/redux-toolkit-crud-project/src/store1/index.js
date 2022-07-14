import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

export const store1 = configureStore({
    reducer:{
        users:userReducer
    }
})
export default store1