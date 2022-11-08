import {configureStore} from "@reduxjs/toolkit";

import postReducer from "./featurep/postSlice";

export default configureStore({
    reducer:{
        app:postReducer
    }
});

