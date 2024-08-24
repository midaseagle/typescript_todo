import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/todoSlice';
import { RootState, AppDispatch } from '../redux/store';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.tasks.theme);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
