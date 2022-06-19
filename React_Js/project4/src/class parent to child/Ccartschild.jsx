import { Component } from "react";

export class Ccartschild extends Component{
    constructor(props){
        super(props)
        this.state={
            showcarts:false
        }
    }
    cartdetails=(()=>{
        this.setState({showcarts:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.cartdetails}>show carts</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>date</th>
                            <th>__v</th>
                        </tr>
                    </thead>
                    {this.state.showcarts && <tbody>
                        {this.props.cartdetails.map((user,i)=>{
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.userId}</td>
                                <td>{user.date}</td>
                                <td>{user.__v}</td>
                            </tr>
                        })}
                        </tbody>}
                </table>
            </div>
        )
    }
}