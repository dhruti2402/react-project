import React from 'react'
import useFetch from '../hooks/useFetch'

const FetchApiExample = () => {

    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    )

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>User's List:</h1>

            {data.map((user) => {

                return (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                )

            })}



        </div>
    )
}

export default FetchApiExample