import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const College = () => {
  return (

    
    <div className='college-container'>

        <h1>College Page</h1>

        <NavLink to="/"><button id='btn'>go to home page</button></NavLink>
     <div className='college-links'>
      <NavLink to="student">Student</NavLink>
      <NavLink to="department">Department</NavLink>
      <NavLink to="details">College Details</NavLink>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default College
