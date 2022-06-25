import React from 'react'

const Filltexttable2 = ({filltextusers}) => {
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>fname</th>
                <th>lname</th>
            </tr>
        </thead>
            <tbody>
                {filltextusers.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    )
                })}
            </tbody>
      </table>
    </div>
  )
}

export default Filltexttable2
