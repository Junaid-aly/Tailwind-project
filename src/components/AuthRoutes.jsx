import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'

const AuthRoutes = () => {
  
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()


 useEffect(() => {
    if(!currentUser?.name) {
      navigate('/login')
    }
 },[])



    return (
   <>

   <Outlet/>
   </>
  )
}

export default AuthRoutes
