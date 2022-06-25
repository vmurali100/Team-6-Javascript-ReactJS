import { Component } from "react"
import axios from 'axios'
import { Class1 } from "./Class1"
export class Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }

    componentDidMount(){
        const url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
        axios.get(url).then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
          <Class1 all={this.state.users}/>
      </div>
    )
  }
}
