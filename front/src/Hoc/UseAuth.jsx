import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

export function UseAuth() {
  return useContext(AuthContext)
}
