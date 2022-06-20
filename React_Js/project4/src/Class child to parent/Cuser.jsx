import { Component } from "react";
import Cuserchild from "./Cuserchild";

export default class Cuser extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
   
    receiveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{receiveusers}=this;
        const{users}=this.state
        return(
            <div>
                <Cuserchild  receiveusers={receiveusers}/>
                
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i)=>{
                            return <tr>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.username}</th>
                                <th>{user.email}</th>
                                
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}