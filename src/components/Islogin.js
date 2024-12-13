import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function Islogin () {

  const [Islogin, setIslogin] = useState(false)

  return (
    <>
        {Islogin ? <Navigate to={'/Myaccount'} /> : <Navigate to={'/Loggin'} />}
    </>
  )
}
