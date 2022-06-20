import { Component } from "react";
import Ccommentschild from "./Ccommentschild";

export default class Ccomments extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            person:{},
            comments:[]
        }
    }
    receivemessage=(message)=>{
        this.setState({message})
    }
    receiveperson=(person)=>{
        this.setState({person})
    }
    receivecomments=(comments)=>{
        this.setState({comments})
    }
    render(){
        const {receivemessage,receiveperson,receivecomments}=this;
        const {message,person,comments}=this.state
        return(
            <div>
                <Ccommentschild receivemessage={receivemessage} receiveperson={receiveperson} receivecomments={receivecomments}/>
                {message && <p>message from child to parent:{message}</p>}
                {Object.keys(person).length > 0 && <p> person from child to parent:{person.email} - {person.body} </p>}

                <table border={1}>
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((user,i)=>{
                            return <tr>
                                <th>{user.postId}</th>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.body}</th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}