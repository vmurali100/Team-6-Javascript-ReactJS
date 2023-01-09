import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const login=(userName)=>{
        setUser(userName)
    };
    const logout=()=>{
        setUser(null)
    }
    return <AuthContext.Provider value={{login,logout,user}}>{children}</AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext)
}