import React from 'react'

const Filltexttable1 = ({filltextUsers}) => {
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>username</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
            {filltextUsers.map((user,i)=>{
                return (
                    <tr key={i}>
                        <th>{user.id}</th>
                        <th>{user.email}</th>
                        <th>{user.username}</th>
                        <th>{user.password}</th>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Filltexttable1
