import React, { Component } from 'react'
const Hoccomp4=(Actualcomp)=>{
    class Hoccomp4 extends Component{
        constructor(props){
            super(props)

            this.state={
                count:100
            }
        }
        handleincrement=()=>{
            this.setState({count:this.state.count-1})
        }
        render(){
            return(
                <Actualcomp count={this.state.count} handleincrement={this.handleincrement}/>
            )
        }

    }
    return Hoccomp4
}
export default Hoccomp4