import React from 'react'
import { Component } from 'react'
const Hoccomp2=(Realcomp)=>{
    class Hoccomp2 extends Component{
        constructor(props){
            super(props)

            this.state={
                count:100
            }
        }
        handleincrese=()=>{
            this.setState({count:this.state.count+1})
        }
        render(){
            return(
                <Realcomp count={this.state.count} handleincrese={this.handleincrese}/>
            )
        }
    }
    return Hoccomp2
}
export default Hoccomp2