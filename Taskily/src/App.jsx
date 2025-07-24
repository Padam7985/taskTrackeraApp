import "./component/style.css"
import { useState ,useEffect} from 'react'
import ProgressTracker   from './component/progressTracker'
import TaskForm from './component/taskForm'
import TaskList from './component/taskList'
import "./App.css"

export default function App() {
   const [tasks, setTasks] = useState([]);


  useEffect(()=>{
   // console.log(tasks);
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  },[tasks]);

  const addTask =(task)=>{
    setTasks(prevTasks => [...prevTasks, task]);
  }
  const updateTask= (updatedTask, index)=>{
    const newtask=[...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index)=>{
    setTasks(tasks.filter ((_,i)=> i!=index));
  }

  const clearTask=()=>{
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Taskily</h1>
      <p className='tagline'>Your Task manager</p>
      </header>
      <TaskForm addTask= {addTask}/>
      <TaskList tasks={tasks} 
      updateTask= {updateTask}
      deleteTask={deleteTask}/>
      <ProgressTracker tasks={tasks}/>
      
      {tasks.length >0 && <button className='clear-btn' onClick={clearTask}> Clear All Task</button>}
      
    </div>
  )
}
