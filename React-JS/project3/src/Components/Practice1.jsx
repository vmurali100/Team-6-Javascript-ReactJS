const { Component } = require("react");

export class Practice1 extends Component {
    constructor() {
        super();
        console.log(this)
        this.state = {
            MyName: "A MansurVali",
            Person: {
                firstName: "Mansur",
                lastName: "Vali"
            },
            Users: ["Mansur", "Naveen", "Santhosh", "SaiKiran", "Sam"]

        };

    }
    render() {
        return (
            <div>
                <h1>Hi-{this.state.MyName}</h1>
                <h1>Hi - {this.state.Person.firstName} {this.state.Person.lastName}</h1>
                <ul>
                    {this.state.Users.map(function (user) {
                        return <li>{user}</li>
                    })}
                </ul>
            </div>
        );

    }
}