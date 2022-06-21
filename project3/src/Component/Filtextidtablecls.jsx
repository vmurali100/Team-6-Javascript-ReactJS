import { Component } from "react";

export class Filtextidtablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            displayidtable:false,
        }
    }
    handleidtable=()=>{
        this.setState({displayidtable:true})
    }
    render(){
        return(
           <div>
            <button onClick={this.handleidtable}>displayidtable</button>
            {this.state.displayidtable && <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allfiltextidscls.map((idcls)=>{
                        return <tr>
                            <td>{idcls.id}</td>
                            <td>{idcls.email}</td>
                            <td>{idcls.username}</td>
                            <td>{idcls.password}</td>
                        </tr>
                    })}
                </tbody>
                </table>}
           </div> 
        )
    }
}