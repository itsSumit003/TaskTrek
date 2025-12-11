import React, { useState, useEffect } from 'react';
import './app.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import Todo from './assets/direct-hit.jpg'
import Doing from './assets/glowing-star.jpg'
import Done from './assets/check-mark-button.jpg'

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks);
  }

  const onDrop = (status, position) => {
    console.log(`${activeCard} is to place into ${status} and the position${position}`);
    if (activeCard == null || activeCard === undefined) return;

    const taskMove = tasks[activeCard];
    const updatedTask = tasks.filter((task, index) => index !== activeCard)

    updatedTask.splice(position, 0, {
      ...taskMove,
      status: status
    })
    setTasks(updatedTask);
    setActiveCard(null);
  }



  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app_mmain'>
        <TaskColumn title="To do" icon={Todo} tasks={tasks} status={"todo"} handleDelete={handleDelete} onDrop={onDrop} setActiveCard={setActiveCard} />
        <TaskColumn title="Doing" icon={Doing} tasks={tasks} status={"doing"} handleDelete={handleDelete} onDrop={onDrop} setActiveCard={setActiveCard} />
        <TaskColumn title="Done" icon={Done} tasks={tasks} status={"done"} handleDelete={handleDelete} onDrop={onDrop} setActiveCard={setActiveCard} />
      </main>
    </div>
  )
}

export default App
