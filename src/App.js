import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'

import './App.css'


function App() {
  const { user } = useSelector((state) => state.auth)
  const history = useHistory()

  const UnAuthApp = () => {
    return (
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    )
  }

  const AuthApp = () => {
    return (
      <Switch>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    )

  }

  useEffect(() => {
    if (!user) history.push('/signin')
    else history.push('/')
  }, [user, history])

  return (
    <div className='App'>
      <Nav />

      {!user ? <UnAuthApp /> : <AuthApp />}
    </div>
  )
}

export default App