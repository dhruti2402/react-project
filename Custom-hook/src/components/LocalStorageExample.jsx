import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const LocalStorageExample = () => {

    const [name, setName] = useLocalStorage("userName", "")

    return (
        <div>
            <h2>Username: {name}</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <button onClick={() => setName("")}>
                Clear
            </button>
        </div>
    )
}

export default LocalStorageExample