import { Component } from "react";
import { Commentschildd } from "./Commentschildd";

export class Commentss extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            comment:{},
            users:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recievecomment=(comment)=>{
        this.setState({comment})
    }
    recieveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{recievemessage,recievecomment,recieveusers}=this;
        const{message,comment,users}=this.state
        return(
            <div>
                <Commentschildd recievemessage={recievemessage} recievecomment={recievecomment} recieveusers={recieveusers}/>
                <p>message-{message}</p>
                <p>comment-{comment.postId}-{comment.id}</p>
                <ul>
                    {users.map((user,i)=>{
                        return <li key={i}>{user.name}{user.email}{user.body}</li>
                    })}
                </ul>
            </div>
        )
    }
}