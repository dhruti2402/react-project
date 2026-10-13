
import { useState } from 'react';
import './App.css'

function App() {

//Showing or hiding components dynamically (useState)
const [isVisible, setisVisible] = useState();

 // onClick event 

 function handleClick () {
  alert ("button clicked")

 }

 // OnChange event

 function handleInput(e){
   console.log(e.target.value);
 }


 //onMouseOver event
  function handleHover(){
    alert ("hover on paragraph");
  }

  //onSubmite event

  function handleForm(){
     console.log("form submitted");
  }

  // conditions based

  let isLogin = true;
  let message;

  // if...else condition
   if (isLogin){
        message = <h1>you are welcome!!! (if...else)</h1>;
  }else{
       message = <h1>please log in... (if...else)</h1>
  }

  // if..else condition not work directly in jsx syntax , 
  // so we store the output in message veriable and display through it. 

  // Logical AND (&&)
  let showMsg = true;

  //if show message true it is display hello react. 

  return (
    <>
      <div>

            <button type='submit' onClick={handleClick}>click me</button>

            <p onMouseOver={handleHover} style={{height:"50px" , width : "200px" , border: "1px solid black"  }}>hello , how are you???</p>


            <form onSubmit={handleForm}>
              <input type='text' onChange={handleInput}></input>
            </form>

            {/* call message (if..else) */}

            {message}

          {/* ternary operator */}
          {isLogin ? <h1>you are welcome!!! (ternary)</h1> : <h1>please log in... (ternary)</h1>}

          {/* call showMsg Logical AND (&&) */}
          {showMsg && <h1>hello react ! (AND (&&))</h1>}

          {/* *Showing or hiding components dynamically  */}
          <button onClick={() => setisVisible(!isVisible)}>
             {isVisible ? "hide message" : "show message"}
          </button>

          {isVisible && <h1>hello you are most welcome...</h1>}
           
      </div>
      </>
  )
}

export default App
