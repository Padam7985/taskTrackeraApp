

 function TaskList({tasks, updateTask, deleteTask}) {
  const toogleComplete= (index)=>{
    const updatedTask = {...tasks[index],completed : !tasks[index].completed}
    updateTask(updatedTask, index); 
  }

  return (
    <>
     <ul className='task-list'>
      {tasks.map((task,index)=>(
        <li key={index} className={task.completed ? 'completed' : ''}>
          <div>
            <span>{task.text}</span>
            <small>({task.priority}, {task.category})</small>
          </div>

          <div>
            <button onClick={() => toogleComplete(index)}>{task.completed ? "undo" : "complete"}</button>
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
     </ul>
    </>
  );
}
export default TaskList     