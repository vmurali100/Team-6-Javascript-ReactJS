import { Component } from "react";

export class Child2Comp extends Component{
    constructor(props){
        super(props)
        this.state ={
           showusers:false,
        }
    }
    handleAshowusers = () => {
        this.setState ({showusers:true})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleAshowusers}> Show Users</button>
                {this.state.showusers &&  <ul>
                   {this.props.allusers.map((user,i)=>{
                    return <li key={i}>{user}</li>
                   })} 
                </ul> }            

            </div>
        )
    }
}