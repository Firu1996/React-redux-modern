import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signin } from '../../data/users'

const initialState = {
    user: null,
    loading: false,
    error: ''
}

const signInAsync = createAsyncThunk('signin', async ({ email, password, store }) => {

    try {
        const user = await signin(email, password)
        return user // using this value by calling action.payload 
    } catch (error) {
        throw error // using this value by calling action.payload 
    }
})

// signInAsync.pending , signInAsync.fulfilled, signInAsync.rejected  automation create status by createAsyncThunk

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signout: (state, action) => {
            state.user = null
            state.loading = false
            state.error = ''
        }
    },
    extraReducers: {
        [signInAsync.pending]: (state, action) => {
            state.loading = true
            state.error = ''
        },
        [signInAsync.fulfilled]: (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = ''
        },
        [signInAsync.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
    },
})


export const { signout } = authSlice.actions

export default authSlice.reducer
