import React from 'react'
import { DataConsumer } from './dataContext'

const User1 = () => {
    return (
        <div>
            <p>User1</p>
            <DataConsumer>
                {(value) => {
                    return <ul>
                        {value.map((u, i) => {
                            return <li key={i}>{u.fname}</li>

                        })}
                    </ul>
                }}
            </DataConsumer>
        </div>
    )
}

export default User1
