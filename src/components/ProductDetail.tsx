import { useEffect } from 'react'
import { useRoute, useLocation } from 'wouter'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [match, params] = useRoute<{ pid: string }>('/product/:pid')
  const [location, navigate] = useLocation()
  const { pid } = params
  const { data, loading } = useFetch(`/products.json`)

  if (!match) return null
  if (loading) return <Loader />

  const addToCart = () => {
    console.log('add to cart')
    console.log(location)

    console.log(pid)
    navigate('/cart')
  }

  return (
    <section className='flex flex-col lg:flex-row gap-14 mb-20'>
      <div className='aspect-[4/5] lg:w-2/3'>
        <img
          src={data[0].image}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='lg:w-1/3 flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-4'>
          <h2>Hoodies</h2>
          <h1 className='font-bold text-2xl'>{data[0].title}</h1>
          <p className='mb-12'>{data[0].description}</p>
        </div>
        <div>
          <span className='font-bold text-2xl'>${data[0].price}</span>
        </div>
        <div>
          <button
            className='bg-black text-white border px-4 py-4 w-full uppercase text-xs hover:bg-white hover:text-black hover:border-black transition-all'
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
