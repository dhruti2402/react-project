import React from 'react'
import { useSyncExternalStore } from 'react';
import { useState, useCallback } from 'react'

const UseCallBack = () => {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")

    const addTodo = useCallback(() => {

        if (task.trim === "") return;

        setTodos((prevTodos) => [...prevTodos, task])

        setTask("");


    }, [task])

    const deleteTodo = useCallback((index) => {

        setTodos((prevTodos) =>
            prevTodos.filter((_, i) => i !== index)
        );

    }, []);

    return (
        <div>
            <h2>Todo List</h2>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your task"
            />

            <button onClick={addTodo}>
                Add Task
            </button>

            {todos.map((todo, index) => (
                <div key={index}>
                    <span>{todo}</span>

                    <button onClick={() => deleteTodo(index)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UseCallBack
