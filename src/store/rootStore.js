import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'

export const rootStore = configureStore({
    reducer: {
        cart: cartReducer,

    }
})
// { cart: [] }
