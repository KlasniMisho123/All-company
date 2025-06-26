"use client"
import React, {useContext, createContext, useState} from 'react'

// any is not suggested
export const AuthContext = createContext<any>(undefined)

// any is not suggested
export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }:any) {
  const [userData, setUserData] = useState("USEEER")

  const value = {
      userData
  }

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
