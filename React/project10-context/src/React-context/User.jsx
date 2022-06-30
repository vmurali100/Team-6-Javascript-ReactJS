import React from 'react'
import { Userconsumer } from './Usercontext'

export const User = () => {
    return (
        <div>
            <p>user</p>
            <Userconsumer>
                {(value) => {
                    return <ul>
                        {value.map((data, i) => {
                            return <li key={i}>{data.fname}</li>
                        })}
                    </ul>
                }}
            </Userconsumer>
        </div>
    )
}
