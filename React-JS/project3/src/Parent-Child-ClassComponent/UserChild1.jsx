import { Component } from "react";

export class UserChild1 extends Component{
    constructor(props){
        super(props)
        this.state={
            showuser:false
        }
    }
    disuser=(()=>{
        this.setState({showuser:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.disuser}>showuser</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                            <th>phone</th>
                            <th>__v</th>
                        </tr>
                    </thead>
                    {this.state.showuser &&
                        <tbody>
                        {this.props.alluser.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.phone}</td>
                                <td>{user.__v}</td>
                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>
        )
    }
}