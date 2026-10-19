
import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';

// const UserContext = createContext();

const ThemeContext = createContext();


function App() {

//  const [User, setUser] = useState({name: "abcd"});


const [Theme, setTheme] = useState("light");

  return ( 


       <ThemeContext.Provider value={{Theme,setTheme}}>

        <div id='container'
        style={{backgroundColor : Theme === "light" ? "antiquewhite" : "black"}}>
        <ChildA />
        </div>

       </ThemeContext.Provider>



      // {/* <UserContext.Provider value={User}>
      //    <ChildA />
      //    </UserContext.Provider> */}
    
  )
}

export default App
// export {UserContext}
export {ThemeContext}
