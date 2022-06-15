import { Component } from "react";

export class Pchild3 extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            showPlaces:false
        }
    }
    displayPlaces=(()=>{
        this.setState({showPlaces:true})
    })
    render(){
        return(
            <div>
                <button onClick={ this.displayPlaces}>showPlaces</button>
               {this.state.showPlaces &&  <ul>{this.props.allplaces.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>}
            </div>
        )
    }
}