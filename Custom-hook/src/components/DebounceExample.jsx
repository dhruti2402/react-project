import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce';

const DebounceExample = () => {

    const [search, setSearch] = useState("")

    const users = [
        "Rahul",
        "Amit",
        "Raj",
        "Karan",
        "Riya",
        "Vikas"
    ];

    const debouncedSearch = useDebounce(search, 500);

    const filterUser = users.filter((user) =>
        user.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    return (
        <div>

            <h1>Debounced Search</h1>

            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h3>Search Results:</h3>

            {filterUser.map((user, index) => (
                <p key={index}>{user}</p>
            ))}

        </div>
    )
}

export default DebounceExample