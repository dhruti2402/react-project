import UserCard from "./components/userCard";

import logo1 from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";

function App() {

  return (
    <>
           <UserCard name = "ABC" image = {logo2}/>
           <UserCard name = "XYZ" image = {logo1}/>
           <UserCard name = "EFG" image = {logo3}/>

      </>
      
    )
}

export default App
