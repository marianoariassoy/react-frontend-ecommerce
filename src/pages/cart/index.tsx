import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { BeatLoader } from 'react-spinners'
import useFetch from '../../hooks/useFetch'
import Cart from './Cart'
import { useDataContext } from '../../hooks/useUserContext'

const Index = () => {
  const { cid } = useDataContext()
  const { data, loading } = useFetch(`/carts/${cid}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='m-auto max-w-6xl mt-48 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-2xl font-bold mb-8 text-center'>Shoping Cart</h1>

        {loading ? (
          <div className='flex items-center justify-center'>
            <BeatLoader />
          </div>
        ) : data.products.length === 0 ? (
          <div className='flex items-center justify-center'>
            <h1 className='font-bold'>No items</h1>
          </div>
        ) : (
          <Cart data={data} />
        )}
      </section>
    </Layout>
  )
}

export default Index
