import React, { useEffect } from 'react'
import { useLocation,useNavigate,Outlet } from 'react-router-dom'

const Authwrapper = () => {
    const location = useLocation()
    const navigate = useNavigate()
useEffect(()=>{
  if(!localStorage.getItem('user') && location.pathname !== '/login' && location.pathname !== '/signup'){
    navigate('/login')
}
},[location])
  return <Outlet/>
}

export default Authwrapper
