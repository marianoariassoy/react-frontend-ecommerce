import { Link } from 'wouter'

interface Data {
  _id: string
  title: string
  price: number
  image: string
}

const CartItem = ({ data, quantity }: { data: Data; quantity: number }) => {
  return (
    <article className='flex justify-between items-center mb-4'>
      <div className='flex gap-x-4 items-center'>
        <Link href={`/product/${data._id}`}>
          <a>
            <img
              src={data.image}
              className='object-cover aspect-square w-16 h-16 hover:opacity-50 transition-all'
            />
          </a>
        </Link>
        <div className='text-sm'>
          <span className='block'>{data.title}</span>
          <span className='opacity-50 block'>Small</span>
          <span className='font-bold block'>({quantity})</span>
        </div>
      </div>
      <div className='text-sm'>${data.price}</div>
    </article>
  )
}

export default CartItem
