import { Component } from "react";

export default class Comp2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname}-{this.props.person.lname}</p>
              <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users}
                </tbody>
               </table>
            </div>
        )
    }
}