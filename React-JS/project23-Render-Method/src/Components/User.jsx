import React, { Component } from 'react'
 class User extends Component {
    
    render() {
        const { Users} = this.props
        return (
            <div>
                <table border="2px">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((user, i) => {
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.price}</td>
                                <td>{user.description}</td>
                                <td>{user.category}</td>
                                <td><img src={user.image} alt="" /></td>
                                <td><button>Edit</button></td>
                                <td><button >Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
               
            </div>
        )
    }
}
export default User