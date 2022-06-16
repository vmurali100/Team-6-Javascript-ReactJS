import { Component } from "react";

export class Cchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showuser:false
        }
    }
    handleshowrose=()=>{
        this.setState({showuser:true})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleshowrose}>show rose flower colors</button>
              {this.state.showuser &&  <ul>
                    {this.props.alluser.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}