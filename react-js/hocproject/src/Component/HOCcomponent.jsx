import React from 'react';
import { Component } from 'react';
const HOCcomponent = (Originalcomponent) => {
    class HOCcomponent extends Component {
          constructor(props){
            super(props)
            this.state={
                count:0
            }
           console.log(this.props) 
          }
          handleIncrement=()=>{
            this.setState({count:this.state.count+1})
          }
        render() {
            return(
                <Originalcomponent count={this.state.count} handleIncrement={this.handleIncrement}/>
            ) 
        }
    }
    return HOCcomponent
}


export default HOCcomponent;