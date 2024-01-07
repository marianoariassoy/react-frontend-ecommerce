import { useState, createContext } from 'react'
export const UserContext = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  const [cartId, setCartId] = useState('')

  // const apiUrl = 'http://localhost:8080/api'
  const apiUrl = 'https://backendcoderhouse-dev-rqpj.2.us-1.fl0.io/api'
  const cid = '659ab014e9991bfce804c39f'

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn, apiUrl, cartId, setCartId, cid }}>
      {children}
    </UserContext.Provider>
  )
}
