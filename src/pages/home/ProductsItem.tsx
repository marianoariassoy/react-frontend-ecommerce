import { Link } from 'wouter'
import Image from '../../components/Image'

interface Props {
  data: { _id: string; title: string; price: number; image: string }
}

const ProductsItem = ({ data }: Props) => {
  return (
    <article className='flex flex-col gap-y-2 text-sm'>
      <div className='relative'>
        <Link href={`/product/${data._id}`}>
          <a className='absolute flex items-center justify-center font-bold text-2xl w-full h-full bg-black/30 backdrop-blur-sm z-10 cursor-pointer transition-all opacity-0 hover:opacity-100 text-white'>
            +
          </a>
        </Link>
        <div className='aspect-[4/6]'>
          <Image
            src={data.image}
            alt={data.title}
          />
        </div>
      </div>
      <div className='px-6 lg:p-0 text-xs flex flex-col gap-y-2'>
        <div className='bg-black h-1 w-8'></div>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='font-semibold uppercase'>{data.title}</h2>
          </div>
          <div>
            <p className='font-bold'>$ {data.price}</p>
          </div>
        </div>
        <div className='opacity-50 uppercase'>sku: {data._id.slice(0, 4)}</div>
      </div>
    </article>
  )
}

export default ProductsItem
