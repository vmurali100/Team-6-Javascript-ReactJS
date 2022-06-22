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
                <p>Component A2</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                            <th>tel</th>
                            <th>address</th>
                            <th>city</th>
                            <th>state</th>
                            <th>zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.tel}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.zip}</td>
                            </tr>
                        })}
                    </tbody>
                </table>                
            </div>
        )
    }
}