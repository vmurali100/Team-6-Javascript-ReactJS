import { Component } from "react"; //bargavi child

export class Bargavicomp extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false,
        }
    }
    handleshowusers=()=>{
        this.setState({showusers:true})
    }
    render(){
        return <div>
            <button onClick={this.handleshowusers}>showusers</button>
            {this.state.showusers && <ul>
                {this.props.allusers.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>}
            
        </div>
    }
}