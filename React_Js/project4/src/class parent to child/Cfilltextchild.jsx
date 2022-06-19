import { Component } from "react";

export class Cfilltextchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showuser:false
        }
    }
    userdetails=(()=>{
        this.setState({showuser:true})
    }) 
    render(){
        return(
            <div>
                <button onClick={this.userdetails}>showuser</button>
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
                    {this.state.showuser && <tbody>
                        {this.props.filltextdetails.map((user,i)=>{
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
                        </tbody>
                        }
                </table>
            </div>
        )
    }
}