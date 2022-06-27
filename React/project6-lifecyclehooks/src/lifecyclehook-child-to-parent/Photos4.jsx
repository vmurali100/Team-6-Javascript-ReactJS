import React, { Component } from 'react'
import Photoschild4 from './Photoschild4'

export default class Photos4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Photos: []
    }
  }
  receivePhotos = (Photos) => {
    this.setState({ Photos })
  }
  render() {
    return (
      <div>
        <Photoschild4 receivePhotos={this.receivePhotos} />
        {this.state.Photos.length >0 &&  <table border={1}>
          <thead>
            <tr>
              <th>albumId</th>
              <th>id</th>
              <th>title</th>
              <th>url</th>
              <th>thumbnailUrl</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Photos.map((user, i) => {
              return <tr key={i}>
                <td>{user.albumId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.url}</td>
                <td>{user.thumbnailUrl}</td>
                <td>{user.email}</td>
              </tr>
            })}
          </tbody>
        </table>}
     
      </div>
    )
  }
}
