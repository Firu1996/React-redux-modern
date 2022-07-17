import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signInAsync } from '../store/slices/authSlice'

export default function Signin() {
  const { loading, error } = useSelector(state => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  return (
    <div className='form'>
      <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
      {!loading ?
        <button onClick={() => dispatch(signInAsync({ email, password }))}>Submit</button>
        : <button disabled>Loading</button>
      }
      {error.length > 0 && <p>{error}</p>}
    </div>
  )
}
