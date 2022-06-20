import { Component } from "react"

export default class Ccartschild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            person: {},
            carts: []
        }
    }
    render() {
        const { receivemessage, receiveperson, receivecarts } = this.props
        return (
            <div>
                <button onClick={() => { receivemessage("hello from the child to parent in cart message") }}>send message</button>
                <button onClick={() => { receiveperson(allcarts[0]) }}>send person</button>
                <button onClick={() => { receivecarts(allcarts)}}>send carts</button>
            </div>
        )
    }
}
var allcarts = [{ "id": 1, "userId": 1, "date": "2020-03-02T00:00:02.000Z", "__v": 0 },
{ "id": 2, "userId": 1, "date": "2020-01-02T00:00:02.000Z", "__v": 0 },
{ "id": 3, "userId": 2, "date": "2020-03-01T00:00:02.000Z", "__v": 0 },
{ "id": 4, "userId": 3, "date": "2020-01-01T00:00:02.000Z", "__v": 0 },
{ "id": 5, "userId": 3, "date": "2020-03-01T00:00:02.000Z", "__v": 0 },
{ "id": 6, "userId": 4, "date": "2020-03-01T00:00:02.000Z", "__v": 0 },
{ "id": 6, "userId": 8, "date": "2020-03-01T00:00:02.000Z", "__v": 0 }]