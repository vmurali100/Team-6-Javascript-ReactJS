import React from 'react'
import { Component } from 'react'

const Hoccomp3=(Datacomp)=>{
     class Hoccomp3 extends Component{
        constructor(props){
            super(props)

            this.state={
                count:200
            }
        }
        handleincrease=()=>{
            this.setState({count:this.state.count-1})
        }
        render(){
            return(
                <Datacomp count={this.state.count} handleincrease={this.handleincrease}/>
            )
        }
    }
    return Hoccomp3
}
export default Hoccomp3