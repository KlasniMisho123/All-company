'use client'

import { useAuth } from '@/context/AuthContext'
import React from 'react'

export default function page() {

  const { userData } = useAuth()
  
  return (
    <div>{userData}</div>
  )
}
