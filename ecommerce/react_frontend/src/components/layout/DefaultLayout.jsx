import React from 'react'
import Home from '../../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import { userStateContext } from '../../context/ContextProvider';
import { Navigate } from 'react-router-dom';
export default function DefaultLayout() {
  const {user, token} = userStateContext();

  // if(!token) {
  //   return <Navigate to="/login" />
  // }
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
