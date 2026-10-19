import  { React, useContext } from 'react'
// import {userContext} from '../App'
import { ThemeContext } from '../App'


const ChildC = () => {

    // const user = useContext(UserContext);

    const {Theme,setTheme} = useContext(ThemeContext);

    function handleClick(){

        if (Theme === "light"){
             
            setTheme ('dark')

        }else{

             setTheme('light')

        }

    }

  return (
    <div>
              {/* My Name is = {user.name}    */}

              <button id='btn' onClick={handleClick}>Change Theme</button>
 </div>
  )
}

export default ChildC
