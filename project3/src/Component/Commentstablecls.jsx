import { Component } from "react";

export class Commenttablescls extends Component{
    constructor(props){
        super(props)
        this.state={
            Commenttablescls:false,
        }
    }
    handleCommenttablescls=()=>{
        this.setState({Commenttablescls:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleCommenttablescls}>Commenttablescls</button>
                {this.state.Commenttablescls && <table border="1">
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allcommentscls.map((comm)=>{
                            return <tr>
                                <td>{comm.postId}</td>
                                <td>{comm.id}</td>
                                <td>{comm.name}</td>
                                <td>{comm.email}</td>
                                <td>{comm.body}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>}
            </div>
        )
    }
}