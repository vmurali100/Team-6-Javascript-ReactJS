import { Component } from "react";

export class Cfilltextchild2  extends Component{
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
                            <th>fname</th>
                            <th>lname</th>
                            
                        </tr>
                    </thead>
                    {this.state.showusers && <tbody>
                        {this.props.filltextdetails.map((user,i)=>{
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