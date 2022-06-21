import { Component } from "react";
import { Photoschildd } from "./Photoschildd";

export class Photoss extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            photo:{},
            user:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recievephoto=(photo)=>{
        this.setState({photo})
    }
    recieveuser=(user)=>{
        this.setState({user})
    }
    render(){
        const{recievemessage,recievephoto,recieveuser}=this;
        const{message,photo,user}=this.state
        return(
            <div>
                <Photoschildd recievemessage={recievemessage} recievephoto={recievephoto} recieveuser={recieveuser}/>
                <p>message from child component{message}</p>
                <p>photo from child component{photo.albumId}-{photo.title}</p>
                <ul>
                    {user.map((users,i)=>{
                        return <li key={i}>{users.albumId} {users.id} {users.title} {users.url} {users.thumbnailUrl}</li>
                    })}
                </ul>
            </div>
        )
    }
}