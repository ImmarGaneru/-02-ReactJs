import React, { useState } from 'react';

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>To-Do List</h1>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a task"
                    style={{ flex: 1, padding: "5px" }}
                />
                <button onClick={addTask} style={{ padding: "5px 10px", cursor: "pointer" }}>Add</button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px", border: "1px solid #ccc", marginBottom: "5px" }}>
                        {task}
                        <button onClick={() => removeTask(index)} style={{ background: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;