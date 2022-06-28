import { useState } from "react";
import { Chi } from "./Chi";


export function Par({all}){
  constructor(props) {
    super(props)
  
    this.state = {
       users:[]
    }
  }

  return (
    <div>
      
      <table border="1">
        <thead>
          <tr>
            <th>Fname</th>
            <th>Lname</th>
            <th>Tel</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {all.map((user,i) => {
            return (
              <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.tel}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zip}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


