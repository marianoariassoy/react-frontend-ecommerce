import { Route } from 'wouter'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'

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
        path='/carts/:cid'
        component={Cart}
      />
    </>
  )
}

export default App
