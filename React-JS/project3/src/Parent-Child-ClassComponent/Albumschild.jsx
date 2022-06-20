import { Component } from "react";

export class Albumschild extends Component{
    constructor(props){
        super(props)
        this.state={
            showalbums:false
        }
    }
    disalbums=(()=>{
        this.setState({showalbums:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.disalbums}>show Albums</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    {this.state.showalbums && <tbody>
                        {this.props.allalbums.map((user,i)=>{
                           return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        })}
                        </tbody>}
                </table>
            </div>
        )
    }
}