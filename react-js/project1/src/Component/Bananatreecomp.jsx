import { Component } from "react";

export class Bananatreecomp extends Component{ //parent-Treecomp
    constructor(props){
        super(props)
        this.state={
            showtrees:false,
        }
    }
    handletrees=()=>{
        this.setState({showtrees:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handletrees}>showtrees</button>
                {this.state.showtrees && <ol>
                    {this.props.alltrees.map((tre,i)=>{
                      return  <li key={i}>{tre}</li>
                    })}</ol>}
            </div>
        )
    }
}