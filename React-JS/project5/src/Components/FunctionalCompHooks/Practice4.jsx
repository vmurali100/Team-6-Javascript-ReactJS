import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Practice4 = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        const url = "https://fakestoreapi.com/carts"
        axios.get(url).then((response) => {
            setCarts(response.data)

        })

    }, [])

    return (
        <div>
            <p>Practice4</p>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Date</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.__v}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Practice4