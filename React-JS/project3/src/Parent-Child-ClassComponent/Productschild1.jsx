import { Component } from "react";

export class Productschild1 extends Component{
    constructor(props){
        super(props)
        this.state={
            showproducts:false
        }
    }
disproducts=(()=>{
    this.setState({showproducts:true})
})
    render(){
        return(
            <div>
                <button onClick={this.disproducts}>show product</button>
                 <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>category</th>
                    </tr>
                </thead>
                {this.state.showproducts && <tbody>
                    {this.props.allproducts.map((user,i)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>{user.description}</td>
                            <td>{user.category}</td>
                        </tr>
                    })}
                    </tbody>}
                    </table>
            </div>
        )
    }
}