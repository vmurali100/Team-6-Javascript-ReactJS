import { useState } from "react";
import Photos1 from "./Photos1";
import Photos2 from "./Photos2";

function Photos(){
    const[message,setmessage]=useState("")
    const[photo,setphoto]=useState({})
    const[allphotos,setallphotos]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendphoto=(photo)=>{
        setphoto(photo)
    }
    const sendallphotos=(allphotos)=>{
        setallphotos(allphotos)
    }

    return(
        <div className="Photos">
            <Photos1 sendmessage={sendmessage} sendphoto={sendphoto} sendallphotos={sendallphotos}/>
            <Photos2 message={message} photo={photo} allphotos={allphotos}/>
        </div>
    )
}
export default Photos