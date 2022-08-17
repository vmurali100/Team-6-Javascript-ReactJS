import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
  //initial state
const initialState={
    users:[
        {id: 1,name:'User one'},
        {id: 2,name:'User two'},
        {id: 3,name:'User three'}
    ]
}
//create context
export const GlobalContext=createContext(initialState);

//provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    return(
        <GlobalContext.Provider value={{
            users:state.users
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
