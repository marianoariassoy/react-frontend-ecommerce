import { Link } from 'wouter'

const ProductsItem = () => {
  return (
    <article className='flex flex-col gap-y-2 text-sm'>
      <div className='aspect-[4/5] relative'>
        <Link href={`/product/1`}>
          <a className='absolute flex items-center justify-center font-bold text-2xl w-full h-full bg-white/50 backdrop-blur-md z-10 cursor-pointer transition-all opacity-0 hover:opacity-100 text-black'>
            +
          </a>
        </Link>

        <img
          src='https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.amazonaws.com%2Fhoodie-south-1689249949098.jpg&w=1920&q=75'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='px-6 lg:p-0'>
        <h2>Product title</h2>
        <p className='font-bold'>$4000</p>
      </div>
    </article>
  )
}

export default ProductsItem
