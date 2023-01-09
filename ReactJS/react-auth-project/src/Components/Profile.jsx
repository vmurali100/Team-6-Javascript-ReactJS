import React from 'react'
import { useAuth } from './Auth'

const Profile = () => {
    const auth = useAuth()
  return (
    <div>
      <h2>Welcome to {auth.user}</h2>
    </div>
  )
}

export default Profile
