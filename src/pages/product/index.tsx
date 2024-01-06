import { useEffect } from 'react'
import { useRoute } from 'wouter'
import Details from './Details'
import Layout from '../../layout/Layout'

const Home = () => {
  const [match, params] = useRoute<{ pid: string }>('/product/:pid')
  const { pid } = params

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!match) {
    return null
  }

  return (
    <Layout>
      <Details pid={pid} />
    </Layout>
  )
}

export default Home
