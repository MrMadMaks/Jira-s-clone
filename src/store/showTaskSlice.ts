import { createSlice } from "@reduxjs/toolkit"

interface IShowTask {
    title: string,
    descr: string

}

const initialState: IShowTask = {
    title: '',
    descr: ''
}

const showTaskSlice = createSlice({
    name: 'showTask',
    initialState,
    reducers: {
        showTitle(state, action) {
            state.title = action.payload
        },
        showDescr(state, action) {
            state.descr = action.payload
        }
    }
})

export default showTaskSlice.reducer
export const { showTitle, showDescr } = showTaskSlice.actions