import React from "react";
import user from "../images/user.png"
const ContactCard=(props)=>{
    const{id,name,email}=props.contacts
    return (
        <div className="item" style={{padding:"10px"}}>
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content" >
            <div className="header">{name}</div>
            <div>{email}</div>
         
        </div>
        <i 
        className="trash alternate outline icon"
        style={{color:"red",marginTop:"7px", float:"right"}}
        ></i>
    </div>
    
    )
}
export default ContactCard
    
