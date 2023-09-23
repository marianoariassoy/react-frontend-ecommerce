const ProductDetail = ({ data }) => {
  const addToCart = () => {
    console.log('add to cart')
  }

  return (
    <section className='flex flex-col lg:flex-row '>
      <div className='col aspect-[4/5] lg:w-2/3'>
        <img
          src={data.image}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='col lg:w-1/3 flex flex-col gap-y-4 p-6 lg:p-12 lg:pt-32'>
        <div className='flex flex-col gap-y-4'>
          <h2 className='uppercase opacity-50 text-sm'>{data.category}</h2>
          <h1 className='font-bold text-2xl'>{data.title}</h1>
          <p className='mb-12'>{data.description}</p>
        </div>
        <div>
          <span className='font-bold text-2xl'>${data.price}</span>
        </div>
        <div className='w-full'>
          <button
            className='bg-black text-white border px-4 py-4 w-full uppercase text-xs hover:bg-white hover:text-black hover:border-black transition-all mb-2 max-w-sm'
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
