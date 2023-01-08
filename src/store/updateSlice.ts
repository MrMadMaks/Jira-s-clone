import { createSlice } from '@reduxjs/toolkit'


export interface IUpdate {
    value: boolean
}

const initialState: IUpdate = {
    value: false
}

export const updateSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        updateModal(state, action) {
            state.value = action.payload
        }
    }
})


export default updateSlice.reducer
export const { updateModal } = updateSlice.actions;