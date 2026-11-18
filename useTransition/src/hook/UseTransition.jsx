import React from 'react'
import { useState, useTransition } from 'react'


const UseTransition = () => {

    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {

        const value = e.target.value;

        // Update input immediately
        setName(value);

        //update list (transition)
        startTransition(() => {
            setList([value])
        })
    }

    return (
        <div>
            <h2>Search Example</h2>

            <input type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter Your Name" />

            {isPending && <p>Updating list...</p>}

            {list.map((item,index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default UseTransition
