import { Component } from "react";
import { Child3Filltext3 } from "./Child3Filltext3";

export class Parent3Filltext3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Vijay: "",
            Varun: {},
            Vivek: [],
        }
    }
    RecieveVijay = (Saivj) => {
        this.setState({ Vijay: Saivj })
    }
    RecieveVarun = (Doctor) => {
        this.setState({ Varun: Doctor })
    }
    RecieveVivek = (Sam) => {
        this.setState({ Vivek: Sam })
    }

    render() {
        const { RecieveVijay, RecieveVarun, RecieveVivek } = this;
        const { Vijay, Varun, Vivek } = this.state;
        return (
            <div>
                <Child3Filltext3 RecieveVijay={RecieveVijay} RecieveVarun={RecieveVarun} RecieveVivek={RecieveVivek} />
                <hr />
                {Vijay && <p>Vijay Recieve Form Child:{Vijay}</p>}
                {Object.keys(Varun).length > 0 && <p>Varun recieve Fo me</p>}

                <ul>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>fname</th>
                                <th>lname</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Vivek.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    })}
                        </tbody>
                    </table>
                    
                </ul>

            </div>
        )
    }
}