import { Link } from 'wouter'

interface Data {
  _id: string
  title: string
  price: number
  image: string
}

const CartItem = ({ data, quantity }: { data: Data; quantity: number }) => {
  return (
    <tr className='border-b'>
      <th className='flex gap-6 px-6 py-4 text-left'>
        <Link href={`/product/${data._id}`}>
          <a>
            <img
              src={data.image}
              className='object-cover w-36 aspect-[4/5] hover:opacity-50 transition-all'
            />
          </a>
        </Link>
        <div>
          <h2 className='font-semibold uppercase'>{data.title}</h2>
          <span className='opacity-50 block font-normal'>Small</span>
        </div>
      </th>
      <td className='font-semibold px-6 py-4'>$ {data.price}</td>
      <td className='font-semibold px-6 py-4'>{quantity}</td>
      <td className='font-semibold px-6 py-4'>$ {data.price * quantity}</td>
    </tr>
  )
}

export default CartItem
