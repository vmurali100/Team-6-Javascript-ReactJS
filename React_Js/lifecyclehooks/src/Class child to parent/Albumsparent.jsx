
import React, { Component } from 'react'
import Albumschild from './Albumschild'

export default class Albumsparent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }
  receivealbums = (albums) => {
    this.setState({ albums })
  }

  render() {
    const { receivealbums } = this
    const { albums } = this.state
    return (
      <div>
        <Albumschild receivealbums={receivealbums} />
        <table border={1}>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.userId}</td>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
