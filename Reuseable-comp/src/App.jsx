
import './App.css'
import User from './components/User'

function App() {

     const userdata = [

      {
          name : "abc",
          age : 22,
          email : "abc@gmail.com",
          id : 1
      },
       {
          name : "bcd",
          age : 24,
          email : "bcd@gmail.com",
          id : 2
      },
       {
          name : "efg",
          age : 24,
          email : "efg@gmail.com",
          id : 3
      },
       {
          name : "xyz",
          age : 24,
          email : "xyz@gmail.com",
          id : 4
      },
       {
          name : "hnm",
          age : 26,
          email : "hnm@gmail.com",
          id : 5
      },

     ]

  return (
    <>
      <div>
             {userdata.map((user)=>(

              <div key={user.id}><User data = {user} /></div>

              ))}
      </div>
    </>
  )
}

export default App
