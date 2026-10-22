
import './App.css'
import {useForm}  from 'react-hook-form'

function App() {

  const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting}
  } = useForm();


  async function onSubmit(data){

    await new Promise((resolve)=> setTimeout(resolve,5000));
      console.log("submitting form : " , data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Frist Name:</label>
        <input type="text" {...register('fname', 
                   {required: true , minLength:{value: 3 , message:"min length atleast 3"}}
              )}
               />

               {errors.fname && <p>{errors.fname.message}</p>}
         <br /><br />


       <label>Mid Name:</label>
        <input type="text" {...register('mname')}/>
          <br /><br />

        <label>Last Name:</label>
        <input type="text" {...register('lname')}/>
          <br /><br />

        <button type='submit' disabled = {isSubmitting}> {isSubmitting ? "submitting..." : "submit"}</button>
      </form>
    </>
  )
}

export default App
