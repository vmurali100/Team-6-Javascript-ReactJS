import { Component } from "react";

export class Child2 extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            showMovies:false
        }
    }
    displaymovies=(()=>{
        this.setState({showMovies:true})
    })
    render(){
        return(
            <div>
                <button onClick={ this.displaymovies}>showMovies</button>
              {this.state.showMovies &&   <ul>
                    {this.props.allmovies.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}