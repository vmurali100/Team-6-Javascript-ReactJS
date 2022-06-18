import { Component } from "react";

export class PfiltextChild3 extends Component{
    constructor(props){
        super(props)
        this.state={
            showUsers:false
        }
    }
    userDetails=(()=>{
        this.setState({showUsers:true})
    })
    render(){
        return(
            <div>
                <button onClick={ this.userDetails}>showUsers</button>
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
                    {this.state.showUsers &&  <tbody>
                        {this.props.filltextDetails.map((user,i)=>{
                            return <tr>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.tel}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.zip}</td>
                            </tr>
                        })}
                    </tbody>}
                   
                </table>
            </div>
        )
    }
}