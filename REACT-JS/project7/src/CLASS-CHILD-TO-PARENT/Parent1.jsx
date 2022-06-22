import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child1 from "./Child1"

export default class Parent1 extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }
    receivedusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{receivedusers}=this
        const{users}=this.state
        return(
            <div>
                <Child1 receivedusers={receivedusers}/>
                <ul>
                    {users.map((users,i)=>{
                        return<div className='userInfo' key={i}>
                            <p>{users.fname}</p>
                            <p>{users.lname}</p>

                        </div>
                    })}
                </ul>
            </div>
        )
    }




}
