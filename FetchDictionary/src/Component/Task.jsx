import { useState } from "react";

function Task() {
    const [task, setTask] = useState([
        {
            title: "doprogram",
            time: "9 pm"
        },
        {
            title: "doprogram2",
            time: "8 pm"
        }
    ]);

    const [newTask, setNewTask] = useState({ title: "", time: "" });

    const addTask = () => {
        if (newTask.title && newTask.time) {
            setTask(prevTask => [...prevTask, newTask]);
            setNewTask({ title: "", time: "" }); // Clear the input fields
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };

    return (
        <>
            <h2>Daily Task</h2>
            {
                task.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.time}</p>
                    </div>
                ))
            }
            <input 
                type="text" 
                name="title" 
                placeholder="Task title" 
                value={newTask.title} 
                onChange={handleInputChange} 
            />
            <input 
                type="text" 
                name="time" 
                placeholder="Task time" 
                value={newTask.time} 
                onChange={handleInputChange} 
            />
            <button onClick={addTask} style={{ backgroundColor: 'green', color: 'black' }}>
                Add Task
            </button>
        </>
    );
}

export default Task;
