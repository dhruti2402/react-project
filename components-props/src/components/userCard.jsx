import React from 'react';
import "./userCard.css";
import logo from "../assets/logo.png"



function UserCard(props) {
  return (
    <div className='main-container'>

        <p id='title'> My name is {props.name}.</p>

        <img id = "image" src={props.image} alt={props.name} />

        <p id="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      
           

    </div>
  )
}

export default UserCard
