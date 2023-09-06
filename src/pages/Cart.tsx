import { useEffect } from 'react'

import Layout from '../layout/Layout'
import CartItem from '../components/CartItem'

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-32 m-auto max-w-6xl px-6'>
        <div className='font-sm'>FORM</div>
        <div>
          <section className='mb-8'>
            <CartItem />
            <CartItem />
            <CartItem />
          </section>
          <section>
            <div className='flex justify-between mb-4 text-sm'>
              <div>Subtotal</div>
              <div>$18.95</div>
            </div>

            <div className='flex justify-between font-bold'>
              <div>Total</div>
              <div>$18.95</div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default Cart
