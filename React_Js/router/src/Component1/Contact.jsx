import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Welcome to contact component</h2>
      <br/><br/>
      <table align='center'>
            <tr>
                <td><label for="">First Name : </label></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td><label for="">Lasst Name : </label></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td><label for="">Enter Age : </label></td>
                <td><input type="number"/></td>
            </tr>
            <tr>
                <td><label for="">Enter EMail : </label></td>
                <td><input type="email"/></td>
            </tr>
            <tr>
                <td><label for="">Password : </label></td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td><label for="">Enter City : </label></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td><label for="">Enter PinCode : </label></td>
                <td><input type="number"/></td>
            </tr>
            <tr >
                <td><label for="">Enter Date : </label></td>
                <td><input type="date"/></td>
            </tr>
            <tr>
                <td><label for="">Select Subject : </label></td>
                <td><select name=" Subject" id="">
                    <option value="">Select</option>
                    <option value="">HTML</option>
                    <option value="">CSS</option>
                </select></td>
            </tr>
            <tr>
                <td><button type="button" >Submit</button></td>
            </tr>


        </table>
    </div>
  )
}

export default Contact
