import { useState } from 'react'
import { Link } from 'wouter'
import axios from 'axios'
import { useDataContext } from '../../hooks/useUserContext'
import { BeatLoader } from 'react-spinners'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

interface Data {
  _id: string
  title: string
  price: number
  image: string
}

const CartItem = ({ data, quantity }: { data: Data; quantity: number }) => {
  const { apiUrl, cid } = useDataContext()
  const [isloading, setLoading] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [error, setError] = useState('')

  const deleteProduct = async () => {
    const url = `${apiUrl}/carts/${cid}/products/${data._id}`
    try {
      const response = await axios.delete(url)
      if (response.status === 200) {
        Toastify({
          text: 'Product deleted from cart',
          duration: 3000,
          gravity: 'bottom',
          style: {
            background: '#000000'
          }
        }).showToast()
        setLoading(true)
        setIsDelete(true)
      } else {
        setError('Error al realizar la solicitud')
        console.log(error)
      }
      setLoading(false)
    } catch (error) {
      setError(error.response.data.error)
      setLoading(false)
    }
  }

  if (isloading) {
    return (
      <tr className='border-b'>
        <td
          className='py-4'
          colSpan={5}
        >
          <BeatLoader />
        </td>
      </tr>
    )
  }

  if (isDelete) {
    return null
  }

  return (
    <tr className='border-b'>
      <th className='flex gap-6 py-4 text-left'>
        <Link href={`/product/${data._id}`}>
          <a>
            <img
              src={data.image}
              className='object-cover object-center w-36 aspect-square hover:opacity-50 transition-all'
            />
          </a>
        </Link>
        <div>
          <h2 className='font-semibold'>{data.title}</h2>
          <span className='opacity-50 block font-normal'>Small</span>
        </div>
      </th>
      <td className='font-semibold px-6 py-4'>$ {data.price}</td>
      <td className='font-semibold px-6 py-4'>{quantity}</td>
      <td className='font-semibold px-6 py-4'>$ {data.price * quantity}</td>
      <td className='font-semibold px-6 py-4 text-right'>
        <button
          onClick={deleteProduct}
          className='hover:opacity-50'
        >
          X
        </button>
      </td>
    </tr>
  )
}

export default CartItem
