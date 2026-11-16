import React, { useId } from 'react'

const UseIDTwo = () => {

    const id = useId();
    


    return (
        <form className='flex flex-col justify-center items-center gap-4 h-lvh'>

            <div>
                <label htmlFor={id + "usernameId"}
                    className='font-bold text-2xl'>
                    Username:
                </label>
                <input type="text" id={id + "usernameId"} name='name' className='border ml-4'/>
            </div>

            <div>
                <label htmlFor={id + "emailId"}
                    className='font-bold text-2xl'>
                    Email:
                </label>
                <input type="text" id={ id + "emailId"} name='email' className='border ml-4'/>
            </div>

            <div>
                <label htmlFor={id + "passwordId"}
                    className='font-bold text-2xl'>
                    Password:
                </label>
                <input type="text" id={id + "passwordId"} name='password' className='border ml-4'/>
            </div>

            <button type='submit'
                className=' text-2xl border p-2 rounded-xl bg-blue-600 text-white'>
                Submit
            </button>
        </form>
    )
}

export default UseIDTwo
