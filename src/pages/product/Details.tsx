import { useState } from 'react'
import axios from 'axios'
import { useDataContext } from '../../hooks/useUserContext'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { Button } from '../../ui'

const Details = ({ pid }: { pid: string }) => {
  const cid = '659ab014e9991bfce804c39f'
  const { data, loading } = useFetch(`/products/${pid}`)
  const { apiUrl } = useDataContext()
  const [isloading, setLoading] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [error, setError] = useState('')

  const addToCart = async () => {
    const url = `${apiUrl}/carts/${cid}/products/${pid}`
    try {
      setLoading(true)
      const response = await axios.put(url)
      if (response.status === 200) {
        setLoading(false)
        setSucess(true)
      } else {
        setError('Error al realizar la solicitud')
      }
      setLoading(false)
    } catch (error) {
      setError(error.response.data.error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center mt-48'>
        <BeatLoader />
      </div>
    )
  }

  if (data === null) {
    return <div className='flex items-center justify-center mt-48 font-bold'>Product not found</div>
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
        <div className='flex flex-col gap-y-4 mb-12'>
          <h2 className='uppercase opacity-50 text-sm'>{data.category}</h2>
          <h1 className='font-bold text-2xl'>{data.title}</h1>
          <p className='opacity-50'>{data.description}</p>
        </div>
        <div>
          <span className='font-bold text-2xl'>${data.price}</span>
        </div>
        <div>
          {isloading ? (
            <div className='flex items-center justify-center h-11'>
              <BeatLoader />
            </div>
          ) : sucess ? (
            <div className='flex items-center justify-center h-11'>Product added</div>
          ) : (
            <Button onClick={addToCart}>Add to cart</Button>
          )}
          {error && <p className='text-red-500 mt-3'>⚠️ {error}</p>}
        </div>
      </div>
    </section>
  )
}

export default Details
