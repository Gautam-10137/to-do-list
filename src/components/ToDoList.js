import '../css/ToDoList.css';
import CreateTask from './CreateTask';
import ToDoItem from './ToDoItem';
import { useState,useEffect } from 'react';
import {v4 as uuid} from 'uuid'

function ToDoList() {

  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem('Tasks')) ?? []);
  const [inputText,setInputText]=useState("");
  const textHandler=(e)=>{
      setInputText(e.target.value);
  }
  const saveHandler=()=>{
    setTasks((prevState)=>[
          ...prevState,
          {
               id: uuid(),
               text:inputText
          }

    ]);
    setInputText("");
  }
  const doneTask=(id)=>{
    const leftTasks=tasks.filter((task)=>task.id!==id);
    setTasks(leftTasks);
  }
  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  return (
    <div className="tasks">
     {
      tasks.map((task)=>(
        <ToDoItem 
        key={task.id}
        id={task.id}
        text={task.text}
        doneTask={doneTask}
        />
      ))
     }
      <CreateTask text={inputText} textHandler={textHandler} saveHandler={saveHandler}/>
    </div>
  );
}

export default ToDoList;
