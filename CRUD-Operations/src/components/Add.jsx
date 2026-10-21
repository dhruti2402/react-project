import React from 'react'
import './Add.css'
import { useState } from 'react';

const Add = ({closeModal,onSubmit,defaultValue}) => {

     const [formState, setFormState] = useState(
        defaultValue || {
        page: "",
        description: "",
        status: "live"
     });

     const [Errors, setErrors] = useState("")

     const validateForm = () =>{

        if(formState.page && formState.description && formState.status){
            setErrors("")
            return true;
        }else{
            let errorField = [];
            for(const[key,value] of Object.entries(formState)){
                if (!value){
                    errorField.push(key);
                }
            }
            setErrors(errorField.join(", "))    
            return false;
        }

     }

     const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value

        })
     }

     const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
     }

    

  return (
    <div
     className='addModal-container'
     onClick={(e) => {
        if (e.target.className==='addModal-container')closeModal()
     }}
      >
           <div className='addModal'>

            <div className='info'>
                
                
                    <label htmlFor="page">Page</label>
                    <input type="text" name='page' value={formState.page} onChange={handleChange}/>
           
                    <label htmlFor="description">Description</label>
                    
                    <textarea name="description" id="description"  
                    value={formState.description} 
                    onChange={handleChange}/>

                    <label htmlFor="status">Status</label>
                    
                    <select name="status" id="status" 
                    value={formState.status} 
                    onChange={handleChange}>
                        
                        <option value="live">Live</option>
                        <option value="draft">Draft</option>
                        <option value="error">Error</option>
                    </select>

                    {Errors && <div className='error'>{`please enter : ${Errors}`}</div>}
             
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
             </div>
        </div>
    </div>
  )
}

export default Add
