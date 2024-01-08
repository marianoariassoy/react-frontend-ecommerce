import { useState } from 'react'
import axios from 'axios'
import { useDataContext } from '../../hooks/useUserContext'
import Layout from '../../layout/Layout'
import { Input } from '../../ui'
import { BeatLoader } from 'react-spinners'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState('')
  const [error, setError] = useState('')

  const { apiUrl } = useDataContext()
  const url = `${apiUrl}/users/register`

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: ''
  })

  const handleRegister = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await axios.post(url, {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age
      })
      if (response.status === 200) {
        setSucess(response.data.status)
      } else {
        setError('Error al realizar la solicitud')
      }
      setLoading(false)
    } catch (error) {
      setError(error.response.data.error)
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className='flex justify-center lg:bg-gray-100 px-6 lg:px-12 py-6'>
        <div className='bg-white lg:p-12 w-full max-w-xl flex flex-col gap-y-6'>
          <div>
            <h1 className='font-extrabold lg:text-xl'>REGISTER</h1>
          </div>
          {sucess && <div className='font-bold'>✅ {sucess}</div>}
          {error && <div className='font-bold'>⚠️ {error}</div>}
          <div>
            <Input
              type='text'
              name='firstName'
              title='Name'
              placeholder={'Enter your name'}
              onChange={event => setData({ ...data, firstName: event.target.value })}
              value={data.firstName}
            />
          </div>
          <div>
            <Input
              type='text'
              name='lastName'
              title='Lastname'
              placeholder={'Enter your lastname'}
              onChange={event => setData({ ...data, lastName: event.target.value })}
              value={data.lastName}
            />
          </div>
          <div>
            <Input
              type='number'
              name='age'
              title='Age'
              placeholder={'Enter your age'}
              onChange={event => setData({ ...data, age: event.target.value })}
              value={data.age}
            />
          </div>
          <div>
            <Input
              type='email'
              name='email'
              title='Email'
              placeholder={'Enter your email'}
              onChange={event => setData({ ...data, email: event.target.value })}
              value={data.email}
            />
          </div>
          <div>
            <Input
              type='password'
              name='password'
              title='Password'
              placeholder={'Enter your password'}
              onChange={event => setData({ ...data, password: event.target.value })}
              value={data.password}
            />
          </div>
          <div className='flex items-center justify-between'>
            {loading ? (
              <div className='h-11'>
                <BeatLoader />
              </div>
            ) : sucess ? (
              ''
            ) : (
              <button
                className='bg-black text-white border px-12 h-11 uppercase text-sm hover:bg-white hover:text-black hover:border-black transition-all font-bold'
                onClick={handleRegister}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register
