import React, { Component } from 'react'
import Childs1 from './Childs1'

export default class Parents1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Albums: []
        }
    }
    ReceivedUsers = (Albums) => {
        this.setState({ Albums })
    }
    render() {
        const { ReceivedUsers } = this
        const { Albums } = this.state
        return (
            <div>
                <Childs1 ReceivedUsers={ReceivedUsers} />
                <p>Parents1</p>
                {Albums.length > 0 && (
                     <table border={2}>
                     <thead>
                         <tr>
                             <th>Id</th>
                             <th>UserId</th>
                             <th>Title</th>
                         </tr>
                     </thead>
                     <tbody>
                            { Albums.map((user, i) => {
                                 return <tr key={i}>
                                     <td>{user.id}</td>
                                     <td>{user.userId}</td>
                                     <td>{user.title}</td>
                                 </tr>
                             })}
                     </tbody>
                 </table>
                )}
                <ul>
                    {Albums.map((user, i) => {
                        return <div className="userInfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.userId}</p>
                            <p>{user.title}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
