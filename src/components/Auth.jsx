// src/Auth.js
import { useState, useEffect } from 'react'
import { loginWithGoogle, logoutUser, getUser } from '../utils/auth'

const Auth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
      } catch (error) {
        console.log(error)
        setUser(null)
      }
    }

    checkUser()
  }, [])

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  )
}

export default Auth

