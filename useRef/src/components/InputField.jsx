import  {React, useRef } from 'react'

const InputField = () => {

    const inputRef = useRef();

    function handleClick(){

        inputRef.current.focus();
        inputRef.current.style.color = "red";    
    }

  return (
    <div>
          <input type="text" placeholder='enter your name' ref={inputRef} />

          <button onClick={handleClick}>Handle Input</button>
    </div>
  )
}

export default InputField
