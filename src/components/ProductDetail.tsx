import { useRoute, useLocation } from 'wouter'

const ProductDetail = () => {
  const [match, params] = useRoute('/product/:pid')
  const [location, navigate] = useLocation()
  if (!match) return null

  const { pid } = params

  const addToCart = () => {
    console.log('add to cart')
    console.log(location)
    console.log(match)
    console.log(pid)
    navigate('/cart')
  }

  return (
    <section className='flex flex-col lg:flex-row gap-14 mb-20'>
      <div className='aspect-[4/5] lg:w-2/3'>
        <img
          src='https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.amazonaws.com%2Fhoodie-south-1689249949098.jpg&w=1920&q=75'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='lg:w-1/3 flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-4'>
          <h2>Hoodies</h2>
          <h1 className='font-bold text-2xl'>Hoodie South America</h1>
          <p className='mb-12'>A soft, warm hoodie from South America that's perfect for keeping you cozy.</p>
        </div>
        <div>
          <span className='font-bold text-2xl'>$4000</span>
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
