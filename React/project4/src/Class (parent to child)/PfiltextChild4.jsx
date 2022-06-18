import { Component } from "react";

export class PfiltextChild4 extends Component{
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
 
                        </tr>
                    </thead>
                    {this.state.showUsers &&  <tbody>
                        {this.props.filltextDetails.map((user,i)=>{
                            return <tr>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>

                            </tr>
                        })}
                    </tbody>}
                   
                </table>
            </div>
        )
    }
}