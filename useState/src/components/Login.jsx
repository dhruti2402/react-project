import React, { useState } from 'react';
import "./Login.css";

const Login = () =>{

    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [Submit, setSubmit] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        alert ("login successfully!!!")
        setSubmit(true);
    }


  return (
    <div>
          <form onSubmit={handleSubmit} className='form'>

         <div className='userInfo'>

            <div className='userName'>
           <label className='users'>Username :</label> 
            <input type='text' value= {name} onChange={(e)=>{setname(e.target.value); setSubmit(false)}} 
            className='input'/> 
            </div>

            <div className='userPass'>
           <label className='users'>Password :</label> 
            <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value); setSubmit(false)}}
            className='input'/>
            </div>

       </div>

            <button type='submit' className='btn'>Login</button>
           </form>

          {Submit &&

          <div className='finalInfo'>
            <p>you are loggedin!!!!  <span>{name}</span></p>
            
           </div>
           }

          

    </div>
  )
}

export default Login
