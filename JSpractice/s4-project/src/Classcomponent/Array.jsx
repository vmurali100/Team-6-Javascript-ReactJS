import React, { Component } from 'react'

export default class Array extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         business:[]
      }
    }
    displayBusiness=()=>{
        this.setState({business:["A","B","C","D","E","F"]})
    }
    handleDelete=(i)=>{
      console.log(i)
      let allbusiness=[...this.state.business]
      allbusiness.splice(i,1)
      this.setState({business:allbusiness})
    }
  render() {
    return (
      <div>
        <button onClick={this.displayBusiness}>Display Business</button>
        {this.state.business.map((business,i)=>{
            return<p onClick={()=>{this.handleDelete(i)}} key={i}>{business}</p>
        })}
      </div>
    )
  }
}
