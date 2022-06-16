import { Component } from "react";

export default class ChildComp6 extends Component{
    constructor(props){
        super(props)
        this.state={
            showFlowers: false
        }
    }
    handleshowFlowers = ()=>{
        this.setState({showFlowers: true})
    }
    render(){
        return <div>
            <button onClick={this.handleshowFlowers}>Display Flowers</button>
            {this.state.showFlowers && (
                <ul>{this.props.allFlower.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>
            )}
        </div>
    }
}