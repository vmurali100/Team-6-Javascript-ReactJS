import { Component } from "react";

export class Userschildd2 extends Component{
    constructor(props){
        super(props)
        this.state={
          showuser:false
        }
    }
    disusers=(()=>{
        this.setState({showuser:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.disusers}>show users</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>website</th>
                        </tr>
                    </thead>
                   { 
                   this.state.showuser &&
                   <tbody>
                        {this.props.allusers.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>
        )
    }
}