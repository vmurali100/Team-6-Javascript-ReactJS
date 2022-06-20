import { Component } from "react";

export class Photoschild1 extends Component{
    constructor(props){
        super(props)
        this.state={
            showphotos:false
        }
    }
    displayphotos=(()=>{
        this.setState({showphotos:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displayphotos}>show Photos</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>albumId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>url</th>
                            <th>thumbnailUrl</th>
                        </tr>
                    </thead>
                    {this.state.showphotos && <tbody>
                        {this.props.allphotos.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.albumId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.url}</td>
                                <td>{user.thumbnailUrl}</td>
                            </tr>
                        })}
                        </tbody>}
                </table>
            </div>
        )
    }
}