import Layout from '../../layout/Layout'
import Products from './Products'
const index = () => {
  return (
    <Layout>
      <header className='-mt-36'>
        <img
          src='/images/coleccion.jpg'
          className='w-full object-cover aspect-[4/5] lg:aspect-auto'
        />
      </header>
      <section className='px-6 lg:px-12 mt-12'>
        <Products />
      </section>
    </Layout>
  )
}

export default index
