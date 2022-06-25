import React, { Component } from 'react'
import axios from 'axios'
import { SaiPostsClassTable } from './SaiPostsClassTable';

export default class SaiPostsClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Details: []
        }
    }

    componentDidMount() {
        const sai = "  http://localhost:3000/Posts";
        axios.get(sai).then((response) => {this.setState({Details:response.data})})

    }

    render() {
        return (
            <div>
                <SaiPostsClassTable allusers={this.state.Details}/>
            </div>
        )
    }
}
