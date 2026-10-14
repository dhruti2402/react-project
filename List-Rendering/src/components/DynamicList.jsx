import React from 'react';
import { useState } from 'react';
import "./DStyle.css"

const DynamicList =()  =>{

    const [Name, setName] = useState("");
    const [Students, setStudents] = useState([])
    const [EditStd, setEditStd] = useState(null)

    function handleSubmit(e){
        e.preventDefault()

        if(Name === ""){
            alert("enter student name");
            return;
        }

        if (EditStd !==null){
            const UpdatedStd = [...Students];

            UpdatedStd[EditStd] = {
                ...UpdatedStd[EditStd],
                name : Name.trim()
            };

            setStudents(UpdatedStd);
            setEditStd(null);

        }else{
             const newStudent = {
              name: Name.trim()
           };

           setStudents([...Students, newStudent]);

        }

    setName("");

    }
  

    function handleDelete(index){

        setStudents(
            Students.filter((Students , i) => i !== index) 
        )
              
    }

    function handleEdit(index){

        setName(Students[index].name)
        setEditStd(index);
    }

  return (
    <div className='main-container'>

        <div className='students'>
       
        <h1 >Student List : </h1>

         <form onSubmit={handleSubmit} className='form'>

        <input type="text" placeholder='enter student name' value={Name} onChange={(e) =>setName(e.target.value)}/>

        <button type='submit'>{EditStd !== null ? "Update" : "Add"}</button>
         </form>

       <ul className='stdList'>

        {Students.map((Students , index) => (<li key={index}>{Students.name} 

            <div className='action'>
            <button type='submit' id = 'editBtn' onClick={() =>handleEdit(index)}>Update</button>
       
        <button type='button' id='deleteBtn' onClick={() =>handleDelete(index)}>Delete</button>
            </div>

            
        </li>))}
        </ul>

</div>
       
    </div>
  )
}

export default DynamicList