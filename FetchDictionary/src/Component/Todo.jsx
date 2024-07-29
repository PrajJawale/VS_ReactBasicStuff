import { useState } from "react";

function Todo() {
    const [mode, setMode] = useState(true);
    const [tasks, setTasks] = useState([
        {
            title: 'go gym',
            day: 'monday',
            time: '11AM'
        },
        {
            title: 'study',
            day: 'everyday',
            time: '1 PM'
        }
    ]);

    const [newTask, setNewTask] = useState({
        title: '',
        day: '',
        time: ''
    });

    function getInput(event) {
        const { name, value } = event.target;
        setNewTask(prevNewTask => ({
            ...prevNewTask,
            [name]: value
        }));
    }

    function addNewTask() {
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask({ title: '', day: '', time: '' }); // Reset new task input fields
    }

    function deleteTask(index) {
        setTasks((prevTasks) => prevTasks.filter((_, taskindex) => taskindex !== index))
    }

    function enableMode(){
        setMode(!mode)
    }

    return (
        <>
            <div style={{ backgroundColor:mode?'black':'white' , color:mode?'white':'black' }}>
                <span>
                    <h2 style={{ color: 'white' }}>To Do List</h2>
                    <input type="checkbox" style={{ color: 'blue' } } onClick={enableMode} />
                </span>
                <div style={{ color: 'red' }}>
                    {
                        tasks.map((currTask, index) => (
                            <div key={index}>
                                <h3>{currTask.title}</h3>
                                <h3>{currTask.day}</h3>
                                <h3>{currTask.time}</h3>
                                <button onClick={() => deleteTask(index)}>delete</button>
                            </div>
                        ))
                    }
                </div>
                <input
                    type="text"
                    placeholder="Task Title"
                    name="title"
                    value={newTask.title}
                    onChange={getInput}
                />
                <input
                    type="text"
                    placeholder="Day"
                    name="day"
                    value={newTask.day}
                    onChange={getInput}
                />
                <span>
                    <input
                        type="text"
                        placeholder="Time"
                        name="time"
                        value={newTask.time}
                        onChange={getInput}
                    />

                </span>
                <button onClick={addNewTask}>Add Task</button>
            </div>
        </>
    );
}

export default Todo;
