import React from 'react'
import { useState, useMemo, useCallback } from 'react'

const useStudents = () => {

    const [students, setStudents] = useState([

        { id: 1, name: "Rahul" },
        { id: 2, name: "Priya" },
        { id: 3, name: "Amit" },
        { id: 4, name: "Neha" }

    ])

    const [search, setSearch] = useState("")

    const filteredStudents = useMemo(() => {
        console.log("Filtering students...");

        return students.filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [students, search]);

    const handleDelete = useCallback((id) => {
        setStudents((prev) =>
            prev.filter((student) => student.id !== id)
        );
    }, []);

    return {
        filteredStudents,
        search,
        setSearch,
        handleDelete
    }

}

export default useStudents