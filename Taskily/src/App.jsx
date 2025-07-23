import React from 'react'
import ProgressTracker   from './component/progressTracker'
import TaskForm from './component/taskForm'
import TaskList from './component/taskList'
export default function App() {
  return (
    <>
      <h1>Taskily</h1>
      <p>Your Task manager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
    </>
  )
}
