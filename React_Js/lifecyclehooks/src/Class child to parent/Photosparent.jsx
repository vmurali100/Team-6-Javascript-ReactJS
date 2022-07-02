import React, { Component } from 'react'
import Photoschild from './Photoschild'

export default class Photosparent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: []
        }
    }
    receivephotos = (photos) => {
        this.setState({ photos })
    }
    render() {
        const { receivephotos } = this
        const { photos } = this.state
        return (
            <div>
                <Photoschild receivephotos={receivephotos}/>
                <table border={1}>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((user,i)=>{
                        return(
                            <tr key={i}>
                                <td>{user.albumId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.url}</td>
                                <td><img src={user.thumbnailUrl} alt="" /></td>
                            </tr>
                        )
                    })}
                </tbody>
              </table>
            </div>
        )
    }
}
