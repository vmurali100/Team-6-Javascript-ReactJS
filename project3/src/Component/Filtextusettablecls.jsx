import { Component } from "react";

export class Filtextusertablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            usertable:false,
        }
    }
    handlefiltextusertable=()=>{
        this.setState({usertable:true}) 
    }
    render(){
        return <div>
            <button onClick={this.handlefiltextusertable}>usertable</button>
            {this.state.usertable && <table border="1">
                <thead>
                    <tr>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allusercls.map((uscl)=>{
                        return <tr>
                            <td>{uscl.fname}</td>
                            <td>{uscl.lname}</td>
                            <td>{uscl.tel}</td>
                            <td>{uscl.address}</td>
                            <td>{uscl.city}</td>
                            <td>{uscl.state}</td>
                            <td>{uscl.zip}</td>
                        </tr>
                    })}
                </tbody>
                
                </table>}
        </div>
    }
}