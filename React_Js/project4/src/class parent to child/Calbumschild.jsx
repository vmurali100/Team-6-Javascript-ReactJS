import { Component } from "react";

export class Calbumschild extends Component{
    constructor(props){
        super(props)
        this.state={
            showalbum:false
        }
    }
    albumdetails=(()=>{
        this.setState({showalbum:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.albumdetails}>show album</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    {this.state.showalbum && <tbody>
                        {this.props.albumdetails.map((user,i)=>{
                            return <tr>
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