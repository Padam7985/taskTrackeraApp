
export default function ProgressTracker({tasks}) {
  const completedTasks= tasks.filter((t) => t.completed).length;
  const totalTask= tasks.length;
  const percenteage = totalTask=== 0  ? 0 : (completedTasks / totalTask) *100;
  return (
    <div className="progress-tracker">
      <p>
        {completedTasks} out of {totalTask} task completed
      </p>

      <div className='progress-bar'>
            <div className='progress'
            style={{width: `${percenteage}%`}}>
            </div>
        </div>
    </div>
  )
}

