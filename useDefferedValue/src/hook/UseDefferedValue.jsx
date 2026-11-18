import React, { useState, useDeferredValue } from "react";

const UseDefferedValue = () => {
    const [search, setSearch] = useState("");

    const deferredSearch = useDeferredValue(search);

    const users = [
        "ABC",
        "cde",
        "efg",
        "stu",
        "vwx",
        "xyz"
    ];

    const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    return (
        <div>
            <h2>Search Users</h2>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name..."
            />

            <h3>Search Results:</h3>

            {filteredUsers.map((user, index) => (
                <p key={index}>{user}</p>
            ))}
        </div>
    );
};



export default UseDefferedValue
