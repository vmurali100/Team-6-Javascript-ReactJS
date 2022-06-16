import { Component } from "react";

export class Pavankalyancomp extends Component{
    constructor(props){
        super(props)
        this.state={
           showheros:false,
        }
    }
    handleheros=()=>{
        this.setState({showheros:true})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleheros}>showheros</button>
                {this.state.showheros && <ol>
                    {this.props.allheros.map((her,i)=>{
                        return <li key={i}>{her}</li>
                    })}</ol>}
            </div>
        )
    }
}