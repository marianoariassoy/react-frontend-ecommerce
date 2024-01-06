import { useContext } from 'react'
import { UserContext } from '../context/user'

export const useDataContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useDataContext must be used within a Provider')
  }
  return context
}
