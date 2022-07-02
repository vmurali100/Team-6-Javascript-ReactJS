import React from 'react'
import { ReceiveConsumer } from './receiveContext'

const User3 = () => {
  return (
    <>
      <p>User3</p>
      <ReceiveConsumer>
      {(value) => {
                    return <ul>
                        {value.map((u, i) => {
                            return <li key={i}>{u.title}</li>

                        })}
                    </ul>
                }}
      </ReceiveConsumer>
    </>
  )
}

export default User3
