import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tasksSlice from './tasksSlice';
import modalSlice from './modalSlice';
import createProjectSlice from './createProjectSlice';
import createNewProjectSlice from './addNewProjectSlice';
import createTaskSlice from './createTaskSlice';
import updateSlice from './updateSlice';
import taskModalSice from './taskModalSice';
import addTaskSlice from './addNewTask';
import showTaskSlice from './showTaskSlice';


const rootReducer = combineReducers({
    tasks: tasksSlice,
    modal: modalSlice,
    createProject: createProjectSlice,
    addProject: createNewProjectSlice,
    createTask: createTaskSlice,
    update: updateSlice,
    taskToggle: taskModalSice,
    addTask: addTaskSlice,
    modalTask: showTaskSlice,
})

export const store = configureStore({
    reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch