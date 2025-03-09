import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import Billboard from '../ui/Billboard';
import ClientHolder from '../ui/ClientHolder';

export default function RootLayout() {
  return (
    <>
        <Navbar />
        <Billboard />
        <ClientHolder />
        <Outlet />
        <Footer />
    </>
  )
}
