import { Component } from "react";

export class Usertablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            usertablecls:false,
        }
    }
    handleusercls=()=>{
        this.setState({usertablecls:true})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleusercls}>usertablecls</button>
                {this.state.usertablecls && <table border="1">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>street</th>
                            <th>Number</th>
                            <th>Zipcode</th>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allUsercls.map((us)=>{
                            return <tr>
                                <td>{us.city}</td>
                                <td>{us.street}</td>
                                <td>{us.number}</td>
                                <td>{us.zipcode}</td>
                                <td>{us.id}</td>
                                <td>{us.email}</td>
                                <td>{us.username}</td>
                                <td>{us.password}</td>
                                <td>{us.phone}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>}
            </div>
        )
    }
}