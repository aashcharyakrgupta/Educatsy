import React, { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

export default function Authprovider({children}) {
     const [authUser, setAuthUser] = useState(() => {
          const storedUser = localStorage.getItem("Users")
          return storedUser ? JSON.parse(storedUser) : undefined
     })

     return (
          <AuthContext.Provider value={ [authUser, setAuthUser] }>{children}</AuthContext.Provider>
     )
}
export const useAuth = () => useContext(AuthContext)
