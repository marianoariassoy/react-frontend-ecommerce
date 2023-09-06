import { useEffect } from 'react'
import ProductDetail from '../components/ProductDetail'
import Products from '../components/Products'
import Layout from '../layout/Layout'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='mt-28 m-auto max-w-6xl px-6'>
        <ProductDetail />
        <Products title='You might also want to check out these products.' />
      </section>
    </Layout>
  )
}

export default Home
