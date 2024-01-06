import { useEffect } from 'react'
import { useRoute } from 'wouter'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Layout from '../../layout/Layout'
import CartItem from './CartItem'

const Cart = () => {
  const [match, params] = useRoute<{ cid: string }>('/carts/:cid')
  const { cid } = params
  const { data, loading } = useFetch(`/carts/${cid}`)
  let totalPrice = 0

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (data) {
    totalPrice = data.products.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
  }

  return (
    <Layout>
      <section className='m-auto max-w-7xl mt-64 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-2xl font-semibold mb-8'>CARRITO DE COMPRAS</h1>
        <div className='w-full flex flex-col lg:flex-row gap-8 items-start'>
          <div className='flex-1 font-sm'>
            <div className='w-full overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b text-sm'>
                    <th className=' py-3 col'>
                      <span>Artículo</span>
                    </th>
                    <th className='px-6 py-3 col'>
                      <span>Precio</span>
                    </th>
                    <th className='px-6 py-3 col'>
                      <span>Cant</span>
                    </th>
                    <th className='px-6 py-3 col'>
                      <span>Total</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        className='pt-12'
                        colSpan={6}
                      >
                        <Loader />
                      </td>
                    </tr>
                  ) : (
                    data.products.map(item => (
                      <CartItem
                        key={item._id}
                        data={item.product}
                        quantity={item.quantity}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className='w-72 bg-gray-100 p-4'>
            <h3 className='font-semibold mb-4 pb-4 border-b'>Resumen de Compras</h3>
            <div className='flex justify-between font-semibold mb-8'>
              <div>Total</div>
              <div>$ {totalPrice}</div>
            </div>

            <button className='bg-black text-white border px-4 py-4 w-full uppercase text-xs hover:bg-gray-100 hover:text-black hover:border-black transition-all mb-2'>
              Buy
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Cart
