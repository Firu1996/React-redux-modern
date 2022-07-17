import React from 'react'
import { addToCart } from '../store/slices/cartSlice'
import { useDispatch } from 'react-redux'

export default function Item({ product }) {
  const dispatch = useDispatch()


  return (
    <div className='product' >
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={() => dispatch(addToCart({ ...product, qty: 1 }))}> Add To Cart</button>
    </div>
  )
}
