import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import CartItem from './CartItem'
import { Button } from '../../ui'
import { useDataContext } from '../../hooks/useUserContext'

const Cart = ({ data }) => {
  const [total, setTotal] = useState(0)
  const { loggedIn } = useDataContext()
  const [, navigate] = useLocation()

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0
      data.products.forEach(item => {
        total += item.product.price * item.quantity
      })
      setTotal(total)
    }
    calculateTotal()
  }, [data])

  const finishOrder = () => {
    if (loggedIn) {
      navigate('/cart/checkout')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='row font-sm'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b text-sm'>
                <th className='py-3 col'>
                  <span>Product</span>
                </th>
                <th className='px-6 py-3 col'>
                  <span>Price</span>
                </th>
                <th className='px-6 py-3 col'>
                  <span>Quantity</span>
                </th>
                <th className='px-6 py-3 col'>
                  <span>Total</span>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.products.map(item => (
                <CartItem
                  key={item._id}
                  data={item.product}
                  quantity={item.quantity}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='row font-bold'>
        <div>Total $ {total}</div>
      </div>
      <div>
        <Button onClick={finishOrder}>Finish your order</Button>
      </div>
    </div>
  )
}

export default Cart
