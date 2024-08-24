import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const DoneTasks: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks.filter(task => task.done));

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTasks;
