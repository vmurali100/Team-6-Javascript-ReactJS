import React, { Component } from 'react'
import Childs2 from './Childs2'

export default class Parents2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Carts: []
        }
    }
    ReceivedUsers = (Carts) => {
        this.setState({ Carts })
    }
    render() {
        const { ReceivedUsers } = this
        const { Carts } = this.state
        return (
            <div>
                <Childs2 ReceivedUsers={ReceivedUsers} />
                <p>Parents2</p>
                {Carts.length > 0 && (
                     <table border={2}>
                     <thead>
                         <tr>
                             <th>Id</th>
                             <th>UserId</th>
                             <th>Date</th>
                             <th>_V</th>
                         </tr>
                     </thead>
                     <tbody>
                            { Carts.map((user, i) => {
                                 return <tr key={i}>
                                     <td>{user.id}</td>
                                     <td>{user.userId}</td>
                                     <td>{user.date}</td>
                                     <td>{user.__v}</td>
                                 </tr>
                             })}
                     </tbody>
                 </table>
                )}
                <ul>
                    {Carts.map((user, i) => {
                        return <div className="userInfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.userId}</p>
                            <p>{user.date}</p>
                            <p>{user.__v}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
