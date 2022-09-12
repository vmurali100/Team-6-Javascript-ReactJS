import React from "react";
import ContactCard from "./ContactCard"

const ContactList=(props)=>{
    // console.log(props);
    const RenderContactList=props.contacts.map((contact,i)=>{
        return <ContactCard contacts={contact}></ContactCard>
    })
    return(
        <div className="ui celled list">
            {RenderContactList}
        </div>
    )
}
export default ContactList