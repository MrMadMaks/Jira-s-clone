import { createSlice } from '@reduxjs/toolkit'
import { ITaskCreateCard } from '../containers/TaskCreateCard'


interface ITasksSlice {
    values: ITaskCreateCard[]
}

const initialState: ITasksSlice = {
    values: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask(state, action) {
            state.values = action.payload
        },
        delTask(state, action) {
            state.values = action.payload
        }
    }
})


export default tasksSlice.reducer
export const { createTask, delTask } = tasksSlice.actions