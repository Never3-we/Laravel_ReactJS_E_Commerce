import React from 'react'
import { userStateContext } from '../../context/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

export default function GuestLayout() {
  const {token} = userStateContext();
  if(token) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}
