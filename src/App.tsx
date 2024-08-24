import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import DoneTasks from './components/DoneTasks';
import ThemeToggle from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.tasks.theme);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Todo App</h1>
      <ThemeToggle />
      <AddTask />
      <TaskList />
      <DoneTasks />
    </div>
  );
};

export default App;
