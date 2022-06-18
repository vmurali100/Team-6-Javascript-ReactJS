import { Component } from "react";

export class PfiltextChild2 extends Component{
    constructor(props){
        super(props)
        this.state={
            showUsers:false

        }
    }
    displayDetails=(()=>{
        this.setState({showUsers:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displayDetails}>showUsers</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    {this.state.showUsers && 
                     <tbody>
                     {this.props.filltextDetails.map((user,i)=>{
                         return <tr>
                             <td>{user.id}</td>
                             <td>{user.email}</td>
                             <td>{user.username}</td>
                             <td>{user.password}</td>
                         </tr>
                     })}
                   
                   
                    </tbody>
                     }
                </table>
            </div>
        )
    }
}