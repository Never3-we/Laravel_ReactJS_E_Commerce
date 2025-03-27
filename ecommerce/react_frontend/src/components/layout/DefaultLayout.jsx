import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { userStateContext } from '../../context/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';
export default function DefaultLayout() {
  const {user, token} = userStateContext();

  if(!token) {
    return <Navigate to="/login" />
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
