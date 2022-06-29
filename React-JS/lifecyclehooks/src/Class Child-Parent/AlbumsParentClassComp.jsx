import React, { Component } from 'react'
import AlbumsChildClassComp from './AlbumsChildClassComp'

export default class AlbumsParentClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         albums:[]
      }
    }

    recievealbums=(albums)=>{
        this.setState({albums})
    }
  render() {

    const{recievealbums}=this
    const {albums}=this.state

    return (
      
      <div>
        <AlbumsChildClassComp recievealbums={recievealbums}/>
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>tiitle</th>
                    
                </tr>
            </thead>
            <tbody>
                {albums.map((user,i)=>{
                    return(
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
