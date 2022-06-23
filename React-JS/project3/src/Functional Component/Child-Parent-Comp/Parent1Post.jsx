import { useState } from "react"
import { Child1Posts } from "./Child1Posts"

export const Parent1Post = () => {
    const [userpost, setuserpost] = useState([])
    const recievedDataFromChild = (userDetails) => {
        setuserpost(userDetails)
    }

    return (
        <div>
            <Child1Posts getdata={recievedDataFromChild} />
            <table border="1">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {userpost.map((post, i) => {
                        return<tr key={i}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                        

                    })}
                </tbody>
            </table>
        </div>
    )
}