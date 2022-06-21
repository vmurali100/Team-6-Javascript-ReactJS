import { Component } from "react";

export class Todostablecls extends Component{
    constructor(props){
        super(props)
        this.state={
           showtodos:false,
        }
    }
    handledodos=()=>{
        this.setState({showtodos:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handledodos}>showtodos</button>
                {this.state.showtodos && 
                   < table border="1">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>Title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.alltodoscls.map((tod)=>{
                            return <tr>
                                <td>{tod.userId}</td>
                                <td>{tod.id}</td>
                                <td>{tod.title}</td>
                                <td>{tod.completed}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                }
            </div>
        )
    }
}