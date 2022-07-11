import React from 'react'

export const Userstable = ({ filltextUsers }) => {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {filltextUsers.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
