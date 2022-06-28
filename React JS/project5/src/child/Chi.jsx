import { Component } from "react"
import axios from 'axios'
export class Chi extends Component {
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
    const{receiveusers}=this.props
    return (
      <div>
          <button onClick={()=>{receiveusers(this.state.users)}}></button>
      </div>
    )
  }
}
