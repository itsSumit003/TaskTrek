import React from 'react';
import '../style/TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, icon, tasks, status, handleDelete, onDrop, setActiveCard }) => {
  const filteredTasks = tasks.filter(task => task.status === status);

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(status, filteredTasks.length);
  };

  return (
    <section
      className='task_column'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt='' /> {title}
      </h2>

      {filteredTasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.task}
          tags={task.tags}
          handleDelete={handleDelete}
          index={tasks.indexOf(task)}
          setActiveCard={setActiveCard}
          draggable
        />
      ))}
    </section>
  );
}

export default TaskColumn
