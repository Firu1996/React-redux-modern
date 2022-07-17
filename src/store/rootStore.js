import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

export const rootStore = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    }
})
// { cart: [] }
