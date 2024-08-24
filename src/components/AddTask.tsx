import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';
import { AppDispatch } from '../redux/store';

const AddTask: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
