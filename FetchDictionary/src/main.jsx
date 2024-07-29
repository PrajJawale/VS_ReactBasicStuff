import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ColourChanger from './Component/ColourChanger'
import Todo2 from './Component/Todo2'
// import SubmitForm from './Component/FormHandle/SubmitFrom'
// import Task from './Component/Task'
// import DynamicInput from './Component/DynamicInput'
// import Todo from './Component/Todo'
// import Counter from './Component/Counter/Counter.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Counter/> */}

    {/* <SubmitForm/> */}

    {/* <Task/> */}

    {/* <DynamicInput/> */}

    {/* <Todo /> */}
    
    <ColourChanger/>

    <Todo2/>
  </React.StrictMode>,
)
