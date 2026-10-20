import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const UserDetail = () => {

    const paramsData = useParams();

  return (
    <div style={{textAlign:"center" , marginTop : "50px" , fontSize : "25px"}}>
            
            <h2>User's Detail page :</h2>

            <h4>User ID is : {paramsData.id}</h4>

            <Link to={"/users/"}>
            
            <button 
            style={{
                width:"100px" , 
                height: "30px" , 
                border:"none" , 
                borderRadius:"5px" , 
                backgroundColor: "blue",
                color :"white",
                fontSize : "15px",
                fontWeight: "600",

                }}> Back </button>
            </Link>

    </div>
  )
}

export default UserDetail
