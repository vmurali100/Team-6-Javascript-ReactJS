import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'

export const  RequireAuth = ({children}) => {
    const auth = useAuth();
    console.log(auth.user)
    if(!auth.user){
       return <Navigate to='/login'/>
    }
  return children
  
}

