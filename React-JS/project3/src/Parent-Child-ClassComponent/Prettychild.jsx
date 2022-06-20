import { Component } from "react";

export class Prettychild extends Component{
    constructor(props){
        super(props)
        this.state={
            showpretty:false
        }
    }
    displaypretty=(()=>{
        this.setState({showpretty:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displaypretty}>showpretty</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                   
                    {this.state.showpretty &&
                    <tbody>
                         {this.props.allpretty.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}
                    </tbody>
                   }
                </table>
            </div>
        )
    }
}