import { useAuth } from '@/context/AuthContext'
import React from 'react'

export default function page() {

  const { userinfo } = useAuth()
  
  return (
    <div>{userinfo.value.userData}</div>
  )
}
