import React, { Component } from 'react'

export default class Form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                fname: "",
                lname: ""
            }
        }
    }
    HandleChange = (event) => {
        var variableName = event.target.name;
        var newPerson = { ...person }
        newPerson[variableName] = event.target.value;
        setPerson(newPerson)
    }
    AddPerson = () => {
        console.log(person)
    }
    render() {
        return (
            <div>
                <p>Form1</p>
                <label htmlFor="">FirstName :</label>
                <input type="text" name="fname" value={this.state.person.fname} onChange={(event) => { HandleChange(event) }} /> <br />
                <label htmlFor="">LastName :</label>
                <input type="text" name="lname" value={this.state.person.lname} onChange={(event) => { HandleChange(event) }} /> <br />
                <button onClick={this.setState.person}>Add User</button>

            </div>
        )
    }
}
