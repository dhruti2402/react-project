import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const userData = [
 
        {id : 1 , name : "abc"},
        {id : 2 , name : "def"},
        {id : 3 , name : "ghi"},
        {id : 4 , name : "jkl"},
        {id : 5 , name : "mno"}

    ]

  return (
    <div style={{textAlign:"center" , marginTop : "50px" , fontSize : "25px"}}>
            
            <h3>User's List :</h3>

            <div>
                {userData.map((item) =>(
                    <h4><Link to={"/users/" + item.id}>{item.name}</Link></h4>
                ))
                }
            </div>
    </div>
  )
}

export default Users
