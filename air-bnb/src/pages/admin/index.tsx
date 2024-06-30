import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Admin from './AdminLayout';

export default function IndexAdmin() {

  const { data } = useSelector((state: any) => state.userReducer);
  if (!data) {
    return <Navigate to={'/login'} />
  } else if (data && data.user.role !== "ADMIN") {
    return <Navigate to={'/admin'} />
  }

  return (
    <div>
      <Admin />
    </div>
  )
}
