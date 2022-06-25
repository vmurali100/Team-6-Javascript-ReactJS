import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Practice2() {
  const [filltext, setFilltext] = useState([]);
  useEffect(() => {
    const url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    axios.get(url).then((response) => {
      setFilltext(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div>
      <p>Practice2</p>

      <table border={2}>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>TelePhoneNo</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {filltext.map((user, i) => {
            return <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.tel}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
            </tr>
          })}
        </tbody>
      </table>

      <ul>
        {filltext.map((user, i) => {
          return <div className="userInfo" key={i}>

            <p>{user.fname}</p>
            <p>{user.lname}</p>
            <p>{user.tel}</p>
            <p>{user.address}</p>
            <p>{user.city}</p>
            <p>{user.state}</p>
            <p>{user.zip}</p>

          </div>
        })}
      </ul>


    </div>
  )
}

export default Practice2