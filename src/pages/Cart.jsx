import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../store/slices/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()

  return <div className='cart'>
    <div className='cart-body'>
      <h4>Title</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Amount</h4>
      <h4>Delete</h4>
    </div>
    {cart.length === 0 ? <p>Cart is empty</p>
      : cart.map(item => <div className='cart-body'>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.qty}</p>
        <p>{item.price * item.qty}</p>
        <p style={{ cursor: 'pointer' }}
          onClick={() => dispatch(deleteCart(item.id))}>
          X
        </p>
      </div>)
    }
  </div>
}
