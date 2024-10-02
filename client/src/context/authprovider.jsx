import React, { createContext, useState, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export default function Authprovider({ children }) {
     const navigate = useNavigate()
     const [authUser, setAuthUser] = useState(() => {
          const storedUser = localStorage.getItem("Users")
          return storedUser ? JSON.parse(storedUser) : undefined
     })

     const logout = useCallback(() => {
          setAuthUser(undefined)
          localStorage.removeItem("Users")
          navigate('/login') 
     }, [navigate])

     return (
          <AuthContext.Provider value={ [authUser, setAuthUser] }>{children}</AuthContext.Provider>
     )
}
export const useAuth = () => useContext(AuthContext)
