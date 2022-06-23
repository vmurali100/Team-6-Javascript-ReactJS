import { Component, useReducer } from "react";
import { Child5todos5 } from "./Child5todos5";

export class Parent5todos5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Beast: "",
            Theri: {},
            Mersal: [],
        }
    }
    RecieveBeast = (Nelson) => {
        this.setState({ Beast: Nelson })
    }
    RecieveTheri = (Atlee) => {
        this.setState({ Theri: Atlee })
    }
    RecieveMersal = (Sai) => {
        this.setState({ Mersal: Sai })
    }
    render() {
        const { RecieveBeast, RecieveTheri, RecieveMersal } = this;
        const { Beast, Theri, Mersal } = this.state;
        return (
            <div>
                <Child5todos5 RecieveBeast={RecieveBeast} RecieveTheri={RecieveTheri} RecieveMersal={RecieveMersal} />
                {Beast && <p>Beast Recieved From Child :{Beast}</p>}
                {Object.keys(Theri).length > 0 && <p>Theri Recievd for Atlee</p>}
                <ul>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>completed</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Mersal.map((sai,i)=>{
                        return <tr key={i}>
                            <td>{sai.userId}</td>
                            <td> {sai.id}</td>
                            <td> {sai.title}</td>
                            <td>{sai.completed}</td>
                        </tr>                       
                    })}
                        </tbody>
                    </table>
                    
                </ul>

            </div>
        )
    }
}