import { useState, createContext } from 'react'

export const UserContext = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const apiUrl = 'http://localhost:8080/api'
  // const apiUrl = 'https://backendcoderhouse-dev-rqpj.2.us-1.fl0.io/api'

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn, apiUrl }}>{children}</UserContext.Provider>
  )
}
