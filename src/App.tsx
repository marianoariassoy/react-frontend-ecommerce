import { Route } from 'wouter'
import Home from './pages/home/'
import Product from './pages/product/'
import Users from './pages/users'
import UsersRegister from './pages/users/Register'
import UsersAdmin from './pages/admin'
import UsersSucess from './pages/admin/Sucess'
import Cart from './pages/cart'

function App() {
  return (
    <>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/category/:category'
        component={Home}
      />
      <Route
        path='/product/:pid'
        component={Product}
      />
      <Route
        path='/users'
        component={Users}
      />
      <Route
        path='/users/register'
        component={UsersRegister}
      />
      <Route
        path='/users/admin'
        component={UsersAdmin}
      />
      <Route
        path='/users/admin/sucess'
        component={UsersSucess}
      />
      <Route
        path='/carts/:cid'
        component={Cart}
      />
    </>
  )
}

export default App
