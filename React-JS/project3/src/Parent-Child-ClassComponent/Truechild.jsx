import { Component } from "react";

export class Truechild extends Component{
    constructor(props){
        super(props)
        this.state={
            showtrue:false
        }
    }

    displaytrue=(()=>{
        this.setState({showtrue:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displaytrue}>showtrue</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                        </tr>
                    </thead>
                    {this.state.showtrue && <tbody>
                        {this.props.alltrue.map((user,i)=>{
                           return <tr key={i}>
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