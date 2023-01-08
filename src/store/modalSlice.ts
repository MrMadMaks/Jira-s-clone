import { createSlice } from '@reduxjs/toolkit'


export interface IModal {
    value: boolean
}

const initialState: IModal = {
    value: false
}

export const modalSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleModal(state, action) {
            state.value = action.payload
        }
    }
})


export default modalSlice.reducer
export const { toggleModal } = modalSlice.actions;