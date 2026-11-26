import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const UserProfile = () => {

    const [name , setName] = useLocalStorage("username", "")

  return (
    <section>

        <h2>Local Storage Example</h2>

        <input type="text"
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />

        <h3>your Name : {name}</h3>
    </section>
  )
}

export default UserProfile