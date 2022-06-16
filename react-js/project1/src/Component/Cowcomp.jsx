import { Component } from "react"  //parent-Animalcomp

export class Cowcomp extends Component{
    constructor(props){
        super(props)
        this.state={
            showanimals:false,
        }
    }
    handleanimals=()=>{
        this.setState({showanimals:true})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleanimals}>showanimals</button>
                {this.state.showanimals && <ul>
                    {this.props.allanimals.map((ani,i)=>{
                        return <li key={i}>{ani}</li>
                    })}
                    </ul>}
            </div>
        )
    }
}