import { Component } from "react";

export class Sea extends Component {
    constructor(){
        super()
        this.state={
            names:"island",
            place:{
               loc:"pacific ocean",
               dis:"2000000 km"
            },
            vehi:["boat","arch","ship"],
            show:false,
            shine:false
        }
    }
    change =()=>{
        this.setState({show:true})
    }
    chang =()=>{
        this.setState({shine:true})
    }
    render() {
        return (<div>
            <button onClick={this.change}>click string</button>

            <button onClick={this.chang}>click object</button>
            
            {this.state.show &&
             <h1>{this.state.names}</h1>
            }
           
           {this.state.shine &&
            <h2>{this.state.place.loc} {this.state.place.dis}</h2>}
            <ul>
            {this.state.vehi.map(function (user,i){
              return <li key={i}>{user}</li>
            })}
            </ul>
        </div>)
    }

}

   
