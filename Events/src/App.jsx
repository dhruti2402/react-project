
import './App.css'

function App() {

 // click event 

 function handleClick () {
  alert ("button clicked")

 }

 // input event

 function handleInput(e){
   console.log(e.target.value);
 }


 //mouse event
  function handleHover(){
    alert ("hover on paragraph");
  }

  function handleForm(){
     console.log("form submitted");
  }

  return (
    <>
      <div>

            <button type='submit' onClick={handleClick}>click me</button>

            <p onMouseOver={handleHover} style={{height:"50px" , width : "200px" , border: "1px solid black"  }}>hello , how are you???</p>


            <form onChange={handleForm}>
              <input type='text' onChange={handleInput}></input>
            </form>
      </div>
      </>
  )
}

export default App
