import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define the Task interface
interface Task {
  id: number;
  text: string;
  done: boolean;
}

// Define the initial state type
interface TodoState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  theme: 'light' | 'dark';
}

// Initial state
const initialState: TodoState = {
  tasks: [],
  status: 'idle',
  error: null,
  theme: 'light',
};

// Thunk for fetching tasks (simulate async behavior)
export const fetchTasks = createAsyncThunk<Task[]>('tasks/fetchTasks', async () => {
  const response = await new Promise<Task[]>((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: 'Sample Task', done: false }]), 500)
  );
  return response;
});

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: Date.now(), text: action.payload, done: false });
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch tasks';
      });
  },
});

export const { addTask, deleteTask, toggleTask, toggleTheme } = todoSlice.actions;

export default todoSlice.reducer;
