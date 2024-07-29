import { useState } from "react";

function Todo2(){

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
      
    const [newTask , setNewTask] = useState({
        title:'',
        day:'',
        time:''
    })

    function getInput(event){
        let {name , value} = event.target;
        setNewTask(
            (prevTask)=>(
                {
                    ...prevTask ,
                    [name]:value
                }
            )
            
        )
    }
    function addtask(){
        setTasks((prevTask)=>[...prevTask ,newTask ])
        setNewTask(
            {
                title:'',
                day:'',
                time:''
            }
        )
    
    }

    function deleteTask(){
        
    }
    return(
        <>
          <div>
              {
                tasks.map((itemList ,index)=>(
                   <div key={index} style={{backgroundColor:'grey'}}>
                      <h2>{itemList.title}</h2>
                      <h2>{itemList.day}</h2>
                      <button onClick={deleteTask}>Delete</button>
                   </div>
                ))
              }
          </div>
          <input
           type="text"
           placeholder="Enter task"
           name="title"
           value={newTask.title}
           onChange={getInput}
          
          />
          <button onClick={addtask}>Add task</button>

        </>
    )
}

export default Todo2;