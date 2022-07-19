import React, { Component } from 'react'
import axios from 'axios'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
             Users:[]
        }
    }
    componentDidMount(){
        const url = "http://localhost:3000/Users"
        axios.get(url).then((response)=>{
            this.setState({Users:response.data})
            console.log(response)
        })
    }
    // Incrementcount = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }
    // DecrementsCount = () => {
    //     this.setState({ count: this.state.count - 1 })
    // }
    render() {
        return (
            <div>
                {this.props.render(this.state.Users)}
            </div>
        )
    }
}
