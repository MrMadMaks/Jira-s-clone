import { createSlice } from '@reduxjs/toolkit'
import { IProjectCard } from "../containers/ProjectCard";

interface ICreateNewProjectSlice {
    projects: IProjectCard[]
}

const initialState: ICreateNewProjectSlice = {
    projects: []
}

export const createNewProjectSlice = createSlice({
    name: 'createNewProject',
    initialState,
    reducers: {
        addProject(state, action) {
            state.projects = action.payload
        },
        delProject(state, action) {
            state.projects = action.payload
        }
    }
})

export default createNewProjectSlice.reducer
export const { addProject, delProject } = createNewProjectSlice.actions;