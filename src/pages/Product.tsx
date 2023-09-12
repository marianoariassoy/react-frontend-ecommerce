import { useRoute } from 'wouter'
import ProductDetail from '../components/ProductDetail'
import Layout from '../layout/Layout'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

const Home = () => {
  const [match, params] = useRoute<{ pid: string }>('/product/:pid')
  const { pid } = params
  const { data, loading } = useFetch(`/products/${pid}`)
  if (!match) return <Loader />

  return (
    <Layout>
      <section>
        {loading ? (
          <div className='h-screen w-full flex items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <ProductDetail data={data[0]} />
        )}
      </section>
    </Layout>
  )
}

export default Home
