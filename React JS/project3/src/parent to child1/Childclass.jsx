import { Component } from "react"

export class Childclass extends Component{
    constructor(props){
        super(props)
        this.state={
        show:false
        }
    }
   
    change =()=>{
        this.setState({show:true})
    }
    render(){
        return (
            <div>
               <button onClick={this.change}>click</button>
           {this.state.show &&
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
           }
            </div>
        )
    }
}