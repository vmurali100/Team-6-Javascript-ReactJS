import { Component } from "react";

export class Applecomp extends Component{ //parent-fruitcomp
    constructor(props){
        super(props)
        this.state={
          showfruit:false,
        }
    }
    handlefruits=()=>{
        this.setState({showfruit:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlefruits}>showfruit</button>
                {this .state.showfruit && <ol>
                {this.props.allfruits.map((fru,i)=>{
                    return <li key={i}>{fru}</li>
                })}
                </ol>}</div>
        )
    }
}