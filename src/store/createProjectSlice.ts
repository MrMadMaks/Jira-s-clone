import { createSlice } from '@reduxjs/toolkit'


export interface IInputVale {
    title: string,
    description: string
}

const initialState: IInputVale = {
    title: '',
    description: ''
}

export const createProjectSlice = createSlice({
    name: 'createProject',
    initialState,
    reducers: {
        inputTitle(state, action) {
            state.title = action.payload
        },
        inputDescr(state, action) {
            state.description = action.payload
        }
    }
})


export default createProjectSlice.reducer
export const { inputTitle, inputDescr } = createProjectSlice.actions;