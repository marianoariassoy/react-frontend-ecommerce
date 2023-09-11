import { Link } from 'wouter'

type Props = {
  data: { _id: number; title: string; price: number; image: string }
}

const ProductsItem = ({ data }: Props) => {
  return (
    <article className='flex flex-col gap-y-2 text-sm'>
      <div className='relative'>
        <Link href={`/product/${data._id}`}>
          <a className='absolute flex items-center justify-center font-bold text-2xl w-full h-full bg-white/50 backdrop-blur-md z-10 cursor-pointer transition-all opacity-0 hover:opacity-100 text-black hover:shadow-xl'>
            +
          </a>
        </Link>
        <img
          src={data.image}
          className='object-cover w-full h-full aspect-[4/6] '
        />
      </div>
      <div className='px-6 lg:p-0'>
        <h2>{data.title}</h2>
        <p className='font-bold'>${data.price}</p>
      </div>
    </article>
  )
}

export default ProductsItem
