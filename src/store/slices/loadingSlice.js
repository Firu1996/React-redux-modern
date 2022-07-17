import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: ''
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        startFetch: () => {

        },
        endFetch: () => {

        },
        errorFecth: () => {

        }
    }
})

export const { startFetch, endFetch, errorFecth } = loadingSlice.actions

export default loadingSlice.reducer