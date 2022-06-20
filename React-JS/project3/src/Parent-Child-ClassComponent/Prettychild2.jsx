import { Component } from "react";

export class Prettychild2 extends Component{
    constructor(props){
        super(props)
        this.state={
            showpretty:false
        }
    }
    displaypretty=()=>{
        this.setState({showpretty:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.displaypretty}>showpretty</button>
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
                    {this.state.showpretty && 
                    <tbody>
                    {this.props.allprettys.map((user,i)=>{
                       return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.fname}</td>
                            <td>{user.tel}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zip}</td>
                        </tr>
                    })}
                    </tbody>}
                </table>
            </div>
        )
    }
}