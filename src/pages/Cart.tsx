import { useRoute } from 'wouter'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import Layout from '../layout/Layout'
import CartItem from '../components/CartItem'

const Cart = () => {
  const [match, params] = useRoute<{ cid: string }>('/carts/:cid')
  const { cid } = params
  const { data, loading } = useFetch(`/carts/${cid}`)
  let totalPrice = 0
  if (!match) return <Loader />

  if (data) {
    totalPrice = data[0].products.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
  }

  return (
    <Layout>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-52 px-6 lg:px-12'>
        <div className='font-sm'>FORM</div>
        <div>
          <section className='mb-12 flex flex-col gap-y-6 justify-center'>
            {loading ? (
              <Loader />
            ) : (
              data[0].products.map(item => (
                <CartItem
                  key={item._id}
                  data={item.product}
                  quantity={item.quantity}
                />
              ))
            )}
          </section>
          <section>
            <div className='flex justify-between font-bold'>
              <div>Total Price</div>
              <div>${totalPrice}</div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default Cart
