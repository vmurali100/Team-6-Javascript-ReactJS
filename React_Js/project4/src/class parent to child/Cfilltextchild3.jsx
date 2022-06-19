import { Component } from "react";

export class Cfilltextchild3  extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false
        }
    }
    filltextdetails=(()=>{
        this.setState({showusers:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.filltextdetails}>show users</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                            
                        </tr>
                    </thead>
                    {this.state.showusers && <tbody>
                        {this.props.filltextdetails.map((user,i)=>{
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            
                            </tr>
                        })}
                        </tbody>}
                </table>
            </div>
        )
    }
}