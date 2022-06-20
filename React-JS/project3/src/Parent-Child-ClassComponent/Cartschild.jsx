import { Component } from "react";

export class Cartschild extends Component{
    constructor(props){
        super(props)
        this.state={
            showcarts:false
        }
    }
    discarts=(()=>{
        this.setState({showcarts:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.discarts}>show carts</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>date</th>
                        </tr>
                    </thead>
                   { this.state.showcarts &&
                   <tbody>
                        {this.props.allcarts.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.userId}</td>
                                <td>{user.date}</td>
                            </tr>
                        })}
                    </tbody>
                      }
                </table>
            </div>
        )
    }
}