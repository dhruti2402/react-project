import React from 'react'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
        This is Dashboard page.

     <Outlet />
    </div>
  )
}

export default Dashboard