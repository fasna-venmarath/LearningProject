import React, { useContext } from 'react'
import { stateContext } from '../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'


const Dashboard = () => {
  const{token}= useContext(stateContext)
  if(!token){
    return <Navigate to="/login"/>
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard