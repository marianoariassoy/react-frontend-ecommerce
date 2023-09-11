import Products from '../components/Products'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <section className='mt-32 m-auto max-w-6xl px-6'>
        <Products />
      </section>
    </Layout>
  )
}

export default Home
