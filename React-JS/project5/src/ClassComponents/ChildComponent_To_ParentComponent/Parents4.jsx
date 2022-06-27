import React, { Component } from 'react'
import Childs4 from './Childs4'

export default class Parents4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Filltext1: []
        }
    }
    ReceivedUsers = (Filltext1) => {
        this.setState({ Filltext1 })
    }
    render() {
        const { ReceivedUsers } = this
        const { Filltext1 } = this.state
        return (
            <div>
                <Childs4 ReceivedUsers={ReceivedUsers} />
                <p>Parents4</p>
                {Filltext1.length > 0 && (
                     <table border={2}>
                     <thead>
                         <tr>
                             <th>FirstName</th>
                             <th>LastName</th>
                         </tr>
                     </thead>
                     <tbody>
                            { Filltext1.map((user, i) => {
                                 return <tr key={i}>
                                     <td>{user.fname}</td>
                                     <td>{user.lname}</td>
                                 </tr>
                             })}
                     </tbody>
                 </table>
                )}
                <ul>
                    {Filltext1.map((user, i) => {
                        return <div className="userInfo" key={i}>
                            <p>{user.fname}</p>
                            <p>{user.lname}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
