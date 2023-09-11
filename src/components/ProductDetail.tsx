import { useLocation } from 'wouter'

const ProductDetail = ({ data }) => {
  const [location, navigate] = useLocation()

  const addToCart = () => {
    console.log('add to cart')
    console.log(location)
    navigate('/cart')
  }

  return (
    <section className='flex flex-col lg:flex-row gap-14 mb-20'>
      <div className='aspect-[4/5] lg:w-2/3'>
        <img
          src={data.image}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='lg:w-1/3 flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-4'>
          <h2>{data.category}</h2>
          <h1 className='font-bold text-2xl'>{data.title}</h1>
          <p className='mb-12'>{data.description}</p>
        </div>
        <div>
          <span className='font-bold text-2xl'>${data.price}</span>
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
