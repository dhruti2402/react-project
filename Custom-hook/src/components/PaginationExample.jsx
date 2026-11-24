import React from 'react'
import usePagination from '../hooks/usePagination'

const PaginationExample = () => {

const users = [
        { id: 1, name: "Rahul" },
        { id: 2, name: "Amit" },
        { id: 3, name: "Priya" },
        { id: 4, name: "Neha" },
        { id: 5, name: "Raj" },
        { id: 6, name: "Karan" },
        { id: 7, name: "Riya" },
        { id: 8, name: "Vikas" },
        { id: 9, name: "Pooja" },
        { id: 10, name: "Jay" }
    ];


    const {currentItem, currentPage, totalPages, nextPage, prevPage} = usePagination(users,3)

  return (
        <div>

            <h1>Users List</h1>

            {currentItem.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                </div>
            ))}

            <br />

            <button
                onClick={prevPage}
                disabled={currentPage === 1}
            >
                Previous
            </button>

          
            <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
            >
                Next
            </button>

            <p>
                Page {currentPage} of {totalPages}
            </p>

        </div>
    );
}

export default PaginationExample