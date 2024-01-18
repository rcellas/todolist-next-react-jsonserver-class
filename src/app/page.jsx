import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TaskList/TasksList';
import { getAllTasks } from './api/api';

export default async function Home() {
  const tasks = await getAllTasks();
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo list App</h1>
        <AddTask />
      </div>
      <TasksList tasks={tasks}/>
    </main>
  );
}
