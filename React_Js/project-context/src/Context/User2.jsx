import React from 'react'
import { SendConsumer } from './sendContext'

const User2 = () => {
  return (
    <div>
      <p>User2</p>
      <SendConsumer>
      {(value) => {
                    return <ul>
                        {value.map((u, i) => {
                            return <li key={i}>{u.title}</li>

                        })}
                    </ul>
                }}
      </SendConsumer>
    </div>
  )
}

export default User2
