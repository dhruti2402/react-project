
import React from "react";

const StudentList = React.memo(({ students, onDelete }) => {
    console.log("StudentList rendered");

    return (
        <div>
            <h2>Student List</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <span>{student.name}</span>

                    <button onClick={() => onDelete(student.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
});

export default StudentList;
