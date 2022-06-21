import { Component } from "react";

export class Posttablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            Posttablecls:false,
        }
    }
    handleposttablecls=()=>{
        this.setState({Posttablecls:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleposttablecls}>Posttablecls</button>
                {this.state.Posttablecls && <table border="1">
                    <thead>
                        <tr>
                            <th>Userid</th>
                            <th>id</th>
                            <th>Title</th>
                            <th>Body</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allpostcls.map((posc)=>{
                            return <tr>
                                <td>{posc.userId}</td>
                                <td>{posc.id}</td>
                                <td>{posc.title}</td>
                                <td>{posc.body}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>}
            </div>
        )
    }
}