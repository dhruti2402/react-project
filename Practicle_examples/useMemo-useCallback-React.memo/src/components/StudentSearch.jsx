import React from 'react'

const StudentSearch = ({search, setSearch}) => {

  return (
     <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
  )
}

export default StudentSearch