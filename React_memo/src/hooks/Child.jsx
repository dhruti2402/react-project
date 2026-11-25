import React from 'react'

const Child = ({name}) => {

  
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
  
}

export default  React.memo(Child)