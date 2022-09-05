import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../feactures/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});