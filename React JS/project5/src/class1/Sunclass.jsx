import { Component } from "react"
import axios from 'axios'
import { Moonclass } from "./class1"
export class Sunclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }

    componentDidMount(){
        const url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
        axios.get(url).then((response)=>{this.setState({users:response.data})})
        console.log(url)
    }
  render() {
    return (
      <div>
          <Moonclass all={this.state.users}/>
      </div>
    )
  }
}
