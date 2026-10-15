import React from 'react'
import Dashboard from './Dashboard.jsx'
import {useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/dashboard')
    }


  return (
    <div>
        
        <p>this is Home page</p>

    <button type='click' onClick={handleClick}>go to dashboard</button>
    </div>
  )
}

export default Home