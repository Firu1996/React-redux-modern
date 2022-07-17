import React from 'react'
import { addToCart } from '../store/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
export default function Item({ product }) {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleAddToCart = () => {
    if (user) {
      dispatch(addToCart({ ...product, qty: 1 }))
    } else {
      history.push('/signin')
    }
  }

  return (
    <div className='product' >
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}> Add To Cart</button>
    </div>
  )
}
