import { Component, useReducer } from "react";

export class Child extends Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
   
    
    render(){
        return (
            <div>
              
            <table border= "1">
                <thead>
                    <tr>
                    <th>fname</th>
                    <th>lname</th>
                   

                    </tr>
                </thead>
                <tbody>
                   {this.props.all .map((user)=>{
                    return<tr>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                    </tr>
                   })}
                </tbody>
            </table>
            </div>
        )
    }
}