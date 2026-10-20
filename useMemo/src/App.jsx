
import { useMemo, useState } from "react";
function App() {

  const [Count, setCount] = useState(0);
  const [Input, setInput] = useState(0)

  function handleCount(){
    setCount (Count+1);
  }


  //craete expensive task for test (every re-render this function called even if value is not changed )
  function expensiveTask(num){
       for (let i=0 ; i<=1000000000 ; i++){}
       return num*2
  }

  //call the expensiveTask function
  // let valueDouble = expensiveTask(Input)

  // use useMemo for not call expensivetTask function in every render
  // it is call only when input value is changed
  let valueDouble =useMemo(() => expensiveTask(Input), [Input])

 function handleInput (e){
   setInput (e.target.value)
 }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px"
      }}>

        <button onClick={handleCount}>Increment</button>
        <h1>Count is : {Count} </h1>

            {/* print double value */}
      <div>
            <input type="number" value={Input} onChange={handleInput} />
            
            <h1>value is  : {valueDouble}</h1>
      </div>
      </div>


     
    </>
  )
}

export default App
