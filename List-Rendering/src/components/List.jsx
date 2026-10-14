import React from 'react'

const List =() => {

    let fruits = ["apple" , "cherry" , "starwbeary" , "graps"]
  return (
    <ul>

         {fruits.map ((fruit,index) =>  (<li key={index}> {fruit} </li>) 

         )}       

    </ul>
  )
}

export default List
