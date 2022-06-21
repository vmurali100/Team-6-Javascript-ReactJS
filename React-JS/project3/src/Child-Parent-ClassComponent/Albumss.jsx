import { Component } from "react";
import { Albumschildd } from "./Albumschildd";

export class Albumss extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            album:{},
            users:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recievealbum=(album)=>{
        this.setState({album})
    }
    recieveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{recievemessage,recievealbum,recieveusers}=this;
        const{message,album,users}=this.state
        return(
            <div>
                <Albumschildd recievemessage={recievemessage} recievealbum={recievealbum} recieveusers={recieveusers}/>
               {message &&  <p>message from child Component{message}</p>}
                {Object.keys(album).length>0 && <p>album from child Component{album.title}-{album.body}</p>}
                <ul>
                    {users.map((user,i)=>{
                        return <li key={i}>{user.userId}{user.id}{user.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}