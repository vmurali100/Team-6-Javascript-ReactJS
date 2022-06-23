import { Component } from "react";

export default class Dheena2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname}{this.props.person.fname}</p>

                <ul>
                    <table border="1">
                        <thead>
                            <tr>
                               <th>fname</th>
                               <th>lname</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.AllUsers.map((user,i)=>{
                        return <tr>
                                  <td> {user.fname}</td>
                                  <td>{user.lname}</td>
                        </tr> 
                           
                       
                    })}
                        </tbody>
                    </table>
                    
                </ul>
            </div>
        )
    }
}