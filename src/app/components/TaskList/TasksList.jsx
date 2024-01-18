import Tasks from "../Tasks/Tasks"

export default function TasksList({tasks}) {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Tasks key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  </div>
  )
}
