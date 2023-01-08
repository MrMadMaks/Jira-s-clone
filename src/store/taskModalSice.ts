import { createSlice } from '@reduxjs/toolkit'


export interface IModal {
    value: boolean
}

const initialState: IModal = {
    value: false
}

export const taskModalSlice = createSlice({
    name: 'taskToggle',
    initialState,
    reducers: {
        toggleModal(state, action) {
            state.value = action.payload
        }
    }
})


export default taskModalSlice.reducer
export const { toggleModal } = taskModalSlice.actions;