import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const foundItem = state.find((item) => item.id === action.payload.id)

            if (!foundItem) {
                state.push(action.payload)
            } else {
                return state.map((item) => ({
                    ...item,
                    qty: item.id === foundItem.id ? item.qty + 1 : item.qty,
                }))
            }
        },
        deleteCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

// Action creators , 
export const { addToCart, deleteCart } = cartSlice.actions

// Reducer
export default cartSlice.reducer