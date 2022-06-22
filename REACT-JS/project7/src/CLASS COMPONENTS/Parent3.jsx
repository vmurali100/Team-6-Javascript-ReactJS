import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child3 from "./Child3"

export default class Parent3 extends Component {
    constructor() {
        super()

        this.state = {
            users
        }
    }
    render() {
        return (
            <div>
                <Child3 Details={this.state.users} />
            </div>
        )
    }
}

var users = [

    {
        "fname": "Ayeola",
        "lname": "Herbert",
        "tel": "(150)815-7893",
        "address": "7346 Mi Ct",
        "city": "Sioux Falls",
        "state": "WI",
        "zip": 85409
    },
    {
        "fname": "Jayashree",
        "lname": "Tanguma",
        "tel": "(594)341-5298",
        "address": "9958 Massa St",
        "city": "Rexburg",
        "state": "KS",
        "zip": 90892
    },
    {
        "fname": "Geeta",
        "lname": "Siflinger",
        "tel": "(516)300-9354",
        "address": "2499 Vestibulum St",
        "city": "Pond Eddy",
        "state": "IA",
        "zip": 93565
    },
    {
        "fname": "Gregory",
        "lname": "Westrate",
        "tel": "(890)073-7738",
        "address": "2390 Nullam St",
        "city": "Evanston",
        "state": "TX",
        "zip": 65295
    },
    {
        "fname": "Douglass",
        "lname": "Geis",
        "tel": "(303)435-3795",
        "address": "2673 Elementum St",
        "city": "Waterford",
        "state": "VA",
        "zip": 99419
    }
]


