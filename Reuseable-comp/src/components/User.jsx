import React from 'react'

const User = ({data}) => {
  return (
        <div
            style={{
                     border: "1px solid black",
                     padding: "20px",
                     backgroundColor: "lightyellow",
                     width : "400px",
                     margin : "30px",
                     display: "flex",
                     justifyContent: "space-between",
                 }}
>

        <h3>Name : <span style={{color :'green'}}>{data.name}</span></h3>
        <h3>Age : <span style={{color :'green'}}>{data.age}</span></h3>
        <h3>Email : <span style={{color :'green'}}>{data.email}</span></h3>

    </div>
  )
}

export default User