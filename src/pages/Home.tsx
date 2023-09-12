import Products from '../components/Products'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <section>
        <img
          src='/images/coleccion.jpg'
          className='w-full object-cover aspect-square lg:aspect-auto'
        />
      </section>
      <section className='px-6 lg:px-12 mt-12'>
        <Products />
      </section>
    </Layout>
  )
}

export default Home
