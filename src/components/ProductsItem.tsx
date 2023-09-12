import { Link } from 'wouter'

type Props = {
  data: { _id: number; title: string; price: number; image: string }
}

const ProductsItem = ({ data }: Props) => {
  return (
    <article className='flex flex-col gap-y-2 text-sm'>
      <div className='relative'>
        <Link href={`/product/${data._id}`}>
          <a className='absolute flex items-center justify-center font-bold text-2xl w-full h-full bg-black/40 backdrop-blur-sm z-10 cursor-pointer transition-all opacity-0 hover:opacity-100 text-black'>
            +
          </a>
        </Link>
        <img
          src={data.image}
          className='object-cover w-full h-full aspect-[4/6] '
        />
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
        <div className='opacity-50 uppercase'>sku:41144</div>
      </div>
    </article>
  )
}

export default ProductsItem
