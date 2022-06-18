import { useState } from "react"

export const Cartschild = ({ getdata }) => {
    const [cartdetails, setcartdetails] = useState(allcarts)
    const sendDataToParent = () => {
        getdata(cartdetails)
    }
    return (
        <div>
            <button onClick={sendDataToParent}>send data to parent</button>
        </div>
    )
}
var allcarts = [{ "id": 1, "userId": 1, "date": "2020-03-02T00:00:02.000Z", "__v": 0 }, 
{ "id": 2, "userId": 1, "date": "2020-01-02T00:00:02.000Z", "__v": 0 },
{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","__v":0},
{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","__v":0},
{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","__v":0},
{"id":6,"userId":4,"date":"2020-03-01T00:00:02.000Z","__v":0},
{"id":6,"userId":8,"date":"2020-03-01T00:00:02.000Z","__v":0}]