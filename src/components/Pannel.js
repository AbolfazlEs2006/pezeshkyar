import React from 'react'
import { Navigate } from 'react-router-dom'


export default function Pannel() {
  document.title = 'Pannel'

  return (
    <>
        <Navigate to={'/Loggin'} />
    </>
  )
}
