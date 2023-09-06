import { useEffect } from 'react'
import Products from '../components/Products'
import Layout from '../layout/Layout'
import Filters from '../components/Filters'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='mt-32 m-auto max-w-6xl px-6'>
        <Filters />
        <Products title='Latest products (10)' />
      </section>
    </Layout>
  )
}

export default Home
