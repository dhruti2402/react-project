import React from 'react'

const Student = () => {

  let students = [
    {
      id : 1,
      name : "abc",
      age : 22
    },
    {
      id : 2,
      name : "def",
      age : 24
    },
    {
      id : 3,
      name : "ghi",
      age : 21
    },
    {
      id : 4,
      name : "jkl",
      age : 20
    },
    {
      id : 5,
      name : "mno",
      age : 24
    }
    
  ]

  return (

    <div>

      <h1>Student List : </h1>
    <ul>
       
       {students.map((student) => (<li key={student.id}>{student.id}   {student.name}   {student.age}</li>))}

    </ul>
    </div>
  )
}

export default Student
