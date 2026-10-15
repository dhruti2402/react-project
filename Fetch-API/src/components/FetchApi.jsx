import React from 'react'
import {useState, useEffect } from 'react';

const FetchApi =() =>{

    const [getData, setgetData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("")

    useEffect(() => {
      getUserData()
    }, [])
    

    async function getUserData() {

       try {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);

                if (! response.ok){

                    throw new Error ("failed to fetch users.")

                }

        response = await response.json();
        // console.log(response.users);  
        setgetData(response.users);
   
    } catch (err){
        seterror(err.message)
    
    } finally{
        setloading(false);
    }
 }

        

  if (loading){
    return <h1>Loading......</h1>
  }


  if (error){
    return <h1>error : {error}</h1>
  }

  return (
    <div>

        <h1>Fetch API</h1>

      {getData && getData.map ((user) => 

                    <ul key={user.id}>
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>
    )}
        
    </div>
  )
}

export default FetchApi