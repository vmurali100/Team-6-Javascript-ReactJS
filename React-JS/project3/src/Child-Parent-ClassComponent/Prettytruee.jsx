import { Component } from "react";
import { Prettychildd } from "./Prettychildd";

export class Prettytruee extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            pretty:{},
            users:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recievepretty=(pretty)=>{
        this.setState({pretty})
    }
    recieveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{recievemessage,recievepretty,recieveusers}=this
        const{message,pretty,users}=this.state
        return(
            <div>
                <Prettychildd recievemessage={recievemessage} recievepretty={recievepretty} recieveusers={recieveusers}/>
                {message && <p>message-{message}</p>}
               {Object.keys(pretty).length>0 &&  <p>pretty-{pretty.id}{pretty.email}</p>}
                <ul>
                    {users.map((user,i)=>{
                        return<li key={i}>
                            {user.id}{user.email}{user.username}{user.password}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}