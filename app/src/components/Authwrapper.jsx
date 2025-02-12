import React from 'react'
import { useLocation,useNavigate,Outlet } from 'react-router-dom'

const Authwrapper = () => {
    const location = useLocation()
    const navigate = useNavigate()

    if(!localStorage.getItem('user') && location.pathname !== '/login' || location.pathname !== '/signup'){
        navigate('/login')
    }
  return <Outlet/>
}

export default Authwrapper
