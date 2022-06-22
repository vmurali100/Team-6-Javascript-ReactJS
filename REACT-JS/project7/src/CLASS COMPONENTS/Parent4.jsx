import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child4 from "./Child4"

export default class Parent4 extends Component {
    constructor() {
        super()

        this.state = {
            users
        }
    }
    render() {
        return (
            <div>
                <Child4 Details={this.state.users} />
            </div>
        )
    }
}

var users = [

    {
        "fname": "Muhammad",
        "lname": "Hemmer"
    },
    {
        "fname": "Jasmine",
        "lname": "Willman"
    },
    {
        "fname": "Danella",
        "lname": "Oshins"
    },
    {
        "fname": "Rosemary",
        "lname": "Altermatt"
    },
    {
        "fname": "Michelle",
        "lname": "Galapon"
    },
    {
        "fname": "Oshiolene",
        "lname": "Jezak"
    },
    {
        "fname": "Megan",
        "lname": "Hastings"
    },
    {
        "fname": "Mohammed",
        "lname": "Symes"
    },
    {
        "fname": "Weibin",
        "lname": "Ortiz"
    },
    {
        "fname": "Ronit",
        "lname": "Humphrey"
    }
]


