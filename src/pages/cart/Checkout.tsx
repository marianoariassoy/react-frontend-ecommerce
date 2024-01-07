import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../hooks/useUserContext'
import { BeatLoader } from 'react-spinners'

const Index = () => {
  const { cid, apiUrl } = useDataContext()
  const [isloading, setLoading] = useState(true)
  const [sucess, setSucess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const finishOrder = async () => {
      const url = `${apiUrl}/carts/${cid}/purcharse`
      try {
        setLoading(true)
        const token = localStorage.getItem('token')
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (response.status === 200) {
          setLoading(false)
          const message = `Thank you for your purchase, ${response.data.name}! Your order was sent to: ${response.data.email}`
          setSucess(message)
        } else {
          setError('Error al realizar la solicitud')
        }
        setLoading(false)
      } catch (error) {
        setError(error.response.data.error)
        setLoading(false)
      }
    }

    finishOrder()
  }, [apiUrl, cid])

  return (
    <Layout>
      <section className='m-auto max-w-6xl mt-48 px-6 lg:px-12'>
        {error ? (
          <h1 className='font-bold mb-8 text-center'>⚠️ {error}</h1>
        ) : isloading ? (
          <div className='flex items-center justify-center'>
            <BeatLoader />
          </div>
        ) : (
          <div className='text-center flex flex-col gap-y-6'>
            <h1 className='text-xl font-bold'>Your order was created</h1>
            <p className='font-bold'>{sucess}</p>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
