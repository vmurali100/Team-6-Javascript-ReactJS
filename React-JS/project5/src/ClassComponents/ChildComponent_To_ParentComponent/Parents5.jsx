import React, { Component } from 'react'
import Childs5 from './Childs5'

export default class Parents5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Filltext2: []
        }
    }
    ReceivedUsers = (Filltext2) => {
        this.setState({ Filltext2 })
    }
    render() {
        const { ReceivedUsers } = this
        const { Filltext2 } = this.state
        return (
            <div>
                <Childs5 ReceivedUsers={ReceivedUsers} />
                <p>Parents5</p>
                {Filltext2.length > 0 && (
                     <table border={2}>
                     <thead>
                         <tr>
                             <th>Id</th>
                             <th>Email</th>
                             <th>UserName</th>
                             <th>Password</th>
                         </tr>
                     </thead>
                     <tbody>
                            { Filltext2.map((user, i) => {
                                 return <tr key={i}>
                                     <td>{user.id}</td>
                                     <td>{user.email}</td>
                                     <td>{user.username}</td>
                                     <td>{user.password}</td>
                                 </tr>
                             })}
                     </tbody>
                 </table>
                )}
                <ul>
                    {Filltext2.map((user, i) => {
                        return <div className="userInfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <p>{user.password}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
