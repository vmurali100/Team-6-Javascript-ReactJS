import { Component } from "react";

export default class Comp2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            Showusers: false
        }
    }

    render(){
        return(
            <div>
                <p>Component 2</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
               <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.users.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        })}
                </tbody>
               </table>
                
            </div>
        )
    }
}