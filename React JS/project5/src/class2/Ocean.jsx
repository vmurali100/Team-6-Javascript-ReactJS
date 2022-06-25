import { Component } from "react"
import axios from 'axios'
import { Sea } from "./Sea"
export class Ocean extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }

    componentDidMount(){
        const url = "http://www.filltext.com/?rows=10&id=%7Bindex%7D&email=%7Bemail%7D&username=%7Busername%7D&password=%7BrandomString%7C5%7D&pretty=true"
        axios.get(url).then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
          <Sea all={this.state.users}/>
      </div>
    )
  }
}
