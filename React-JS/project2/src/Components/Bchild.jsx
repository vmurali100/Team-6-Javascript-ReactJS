import { Component } from "react";

export class Bchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false
        }
    }
    handleuser=()=>{
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleuser}>show jasmine flower colors</button>
               {
                this.state.showusers && <ul>
                    {this.props.alluser.map((users,i)=>{
                        return <li key={i}>{users}</li>
                    })}
                </ul>
               }
            </div>
        )
    }
}
