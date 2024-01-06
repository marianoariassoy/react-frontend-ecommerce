import { useState } from 'react'
import Layout from '../../layout/Layout'
import { Input } from '../../ui'
import { BeatLoader } from 'react-spinners'
import axios from 'axios'
import { useDataContext } from '../../hooks/useUserContext'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [error, setError] = useState(false)

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
      const response = await axios.post(url, {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age
      })

      if (response.data.status === 'User created') {
        setSucess(true)
      } else {
        setError(true)
      }
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className='flex justify-center bg-gray-100 px-6 lg:px-12 min-h-[84vh] pb-32 pt-48'>
        <div className='bg-white p-12 w-full max-w-xl flex flex-col gap-y-6'>
          {sucess && <div className='font-bold'>✅ User was created successfully</div>}
          {error && <div className='font-bold'>⚠️ Error creating user</div>}
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
