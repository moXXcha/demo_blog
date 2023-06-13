import React from 'react'
import {signOut } from "firebase/auth"
import { auth} from "../firebase"
import { useNavigate } from 'react-router-dom'

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>Googleでログアウト</button>
    </div>
  )
}

export default Logout