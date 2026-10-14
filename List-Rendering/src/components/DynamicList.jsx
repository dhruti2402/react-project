import React from 'react';
import { useState } from 'react';
import "./DStyle.css"

const DynamicList =()  =>{

    const [Name, setName] = useState("");
    const [Students, setStudents] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        if(Name === ""){
            alert("enter student name");
            return;
        }

         const newStudent = {
      name: Name.trim()
    };

    setStudents([...Students, newStudent]);
    setName("");

    }
  

    function handleDelete(index){

        setStudents(
            Students.filter((Students , i) => i !== index) 
        )
              
    }

  return (
    <div className='main-container'>

        <div className='students'>
       
        <h1 >Student List : </h1>

         <form onSubmit={handleSubmit} className='form'>

        <input type="text" placeholder='enter student name' value={Name} onChange={(e) =>setName(e.target.value)}/>

        <button type='submit'>Add</button>
         </form>

       <ul className='stdList'>

        {Students.map((Students , index) => (<li key={index}>{Students.name} 
       
        <button type='button' id='deleteBtn' onClick={() =>handleDelete(index)}>Delete</button>
        </li>))}
        </ul>

</div>
       
    </div>
  )
}

export default DynamicList