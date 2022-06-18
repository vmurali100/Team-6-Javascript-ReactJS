import { Component } from "react";

export class CartsChild5 extends Component{
    constructor(props){
        super(props)
        this.state={
            showCart:false
        }
    }
    displayCart=(()=>{
        this.setState({showCart:true})
    })
    render(){
        return(
            <div>
                <button onClick={ this.displayCart}>showCart</button>
                  <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>__v</th>
                        <th>email</th>
                    </tr>
                </thead>
                {this.state.showCart &&  <tbody>
                    {this.props.cartdetails.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.__v}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>}
               
            </table>
            </div>
        )
    }
}