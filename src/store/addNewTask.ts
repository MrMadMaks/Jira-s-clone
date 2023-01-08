import { createSlice } from '@reduxjs/toolkit'
import { IProjectCard } from "../containers/ProjectCard";

interface ICreateNewProjectSlice {
    projects: IProjectCard[]
}

const initialState: ICreateNewProjectSlice = {
    projects: []
}

export const addTaskSlice = createSlice({
    name: 'createNewProject',
    initialState,
    reducers: {
        addTask(state, action) {
            state.projects = action.payload
        }
    }
})

export default addTaskSlice.reducer
export const { addTask } = addTaskSlice.actions;