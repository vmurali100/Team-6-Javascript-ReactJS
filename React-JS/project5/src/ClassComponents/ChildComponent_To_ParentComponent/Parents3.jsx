import React, { Component } from 'react'
import Childs3 from './Childs3'

export default class Parents3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Photos: []
        }
    }
    ReceivedUsers = (Photos) => {
        this.setState({ Photos })
    }
    render() {
        const { ReceivedUsers } = this
        const { Photos } = this.state
        return (
            <div>
                <Childs3 ReceivedUsers={ReceivedUsers} />
                <p>Parents3</p>
                {Photos.length > 0 && (
                     <table border={2}>
                     <thead>
                         <tr>
                             <th>Id</th>
                             <th>AlbumId</th>
                             <th>Title</th>
                             <th>Url</th>
                             <th>ThumbnailUrl</th>
                         </tr>
                     </thead>
                     <tbody>
                            { Photos.map((user, i) => {
                                 return <tr key={i}>
                                     <td>{user.id}</td>
                                     <td>{user.albumId}</td>
                                     <td>{user.title}</td>
                                     <td>{user.url}</td>
                                     <td>{user.thumbnailUrl}</td>
                                 </tr>
                             })}
                     </tbody>
                 </table>
                )}
                <ul>
                    {Photos.map((user, i) => {
                        return <div className="userInfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.albumId}</p>
                            <p>{user.title}</p>
                            <p>{user.url}</p>
                            <p>{user.thumbnailUrl}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
