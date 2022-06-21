import { Component } from "react";

export default class FilltextChild5 extends Component{
    constructor(props){
        super(props)

        this.state = {
            showUsers : false
        }
    }
    handleshowUsers = () =>{
        this.setState({showUsers: true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleshowUsers}>Display Users</button>
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
                    {this.state.showUsers && <tbody>
                        {this.props.allFilltextDetails.map((user,i)=>{
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
                        </tbody>}
                </table>
            </div>
        )
    }
}