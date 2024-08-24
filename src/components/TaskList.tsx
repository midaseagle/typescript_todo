import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, fetchTasks } from '../redux/todoSlice';
import { RootState, AppDispatch } from '../redux/store';

const TaskList: React.FC = () => {
  const { tasks, status, error } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            <button onClick={() => dispatch(toggleTask(task.id))}>
              {task.done ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
