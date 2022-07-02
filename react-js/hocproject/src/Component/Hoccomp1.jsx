import React from 'react'
import { Component } from 'react'

const Hoccomp1=(Originalcomponent)=>{
    class Hoccomp1 extends Component{
        constructor(props){
            super(props)

            this.state={
                count:0
            }
        }
    
    handleincrement=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return(
            
               <Originalcomponent count={this.state.count} handleincrement={this.handleincrement}/>
            
        )
        
    }
}
    return Hoccomp1
}
export default Hoccomp1