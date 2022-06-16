import { Component } from "react";

export class NaveenComp extends Component {
    constructor() {
        super();
        this.state = {
            myName: "Naveen",
            person: {
                fname: "Naveen",
                lname: "kumar"
            },
            users: ["gowtham", "dheena", "raju", "rehman"]
        }
    }
    render() {
        return <div>
            <h2>hello -{this.state.myName}</h2>
            <p>{this.state.person.fname}-{this.state.person.lname}</p>
            <h2>hello Naveen Component</h2>

            <ul>
                {this.state.users.map(function(user){
                    return<li>{user}</li>

                })}
             </ul>

            <img src="./assets/my images1.jpg" alt="" />
        </div>
    }

}