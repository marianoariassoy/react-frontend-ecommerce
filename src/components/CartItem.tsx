import { Link } from 'wouter'

const CartItem = () => {
  return (
    <article className='flex justify-between items-center mb-4'>
      <div className='flex gap-x-4 items-center'>
        <Link href={`/product/1`}>
          <a>
            <img
              src='https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.amazonaws.com%2Fhoodie-south-1689249949098.jpg&w=1920&q=75'
              className='object-cover aspect-square w-16 h-16 hover:opacity-50 transition-all'
            />
          </a>
        </Link>

        <div className='text-sm'>
          <span className='block'>Megabat Tee</span>
          <span className='block opacity-50'>White / Small</span>
        </div>
      </div>
      <div className='text-sm'>$18.95</div>
    </article>
  )
}

export default CartItem
