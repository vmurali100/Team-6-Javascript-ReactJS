import { Component } from "react";

export class Filtextnametablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            filtextnametable:false,
        }
    }
    handlefiltextnamecls=()=>{
        this.setState({filtextnametable:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlefiltextnamecls}>filtextnametable</button>
                {this.state.filtextnametable &&  <table border="1">
                    <thead>
                        <tr>
                            <th>Fname</th>
                            <th>Lname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allfiltextnamecls.map((namc)=>{
                            return <tr>
                                <td>{namc.fname}</td>
                                <td>{namc.lname}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>}
            </div>
        )
    }
}