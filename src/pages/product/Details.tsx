import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { Button } from '../../ui'

const Details = ({ pid }: { pid: string }) => {
  const { data, loading } = useFetch(`/products/${pid}`)

  // const addToCart = () => {
  //   console.log('add to cart')
  // }

  if (loading) {
    return (
      <div className='flex items-center justify-center mt-64'>
        <BeatLoader />
      </div>
    )
  }

  if (data === null) {
    return <div className='flex items-center justify-center mt-64 text-2x font-bold'>Product not found</div>
  }

  return (
    <section className='flex flex-col lg:flex-row'>
      <div className='col aspect-[4/5] lg:w-2/3'>
        <Image
          src={data.image}
          alt={data.title}
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
          <Button type='submit'>Add to cart</Button>
        </div>
      </div>
    </section>
  )
}

export default Details
