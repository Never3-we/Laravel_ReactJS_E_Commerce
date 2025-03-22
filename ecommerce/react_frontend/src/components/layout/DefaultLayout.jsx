import React from 'react'
import Home from '../../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
export default function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
