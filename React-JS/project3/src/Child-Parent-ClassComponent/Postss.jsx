import { Component } from "react";
import { Postchildd } from "./Postchildd";

export class Postss extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            post:{},
            users:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recievepost=(post)=>{
        this.setState({post})
    }
    recieveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{recievemessage,recievepost,recieveusers}=this;
        const{message,post,users}=this.state
        return(
            <div>
                <Postchildd recievemessage={recievemessage} recievepost={recievepost} recieveusers={recieveusers}/>
              {message &&   <p>post from child component{message}</p>}
                {Object.keys(post).length>0 && <p>message from child component{post.title}-{post.body}</p>}
                <ul>
                    {users.map((user,i)=>{
                        return<li key={i}>{user.userId} {user.id} {user.title} {user.body}</li>
                    })}
                </ul>
            </div>
        )
    }
}