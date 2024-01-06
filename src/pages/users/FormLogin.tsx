import { useState } from 'react'
import { Input } from '../../ui'
import { BeatLoader } from 'react-spinners'
import { Link } from 'wouter'
import { useDataContext } from '../../hooks/useUserContext'
import axios from 'axios'

const FormLogin = () => {
  const { setLoggedIn, setUser, apiUrl } = useDataContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const url = `${apiUrl}/sessions/login`

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post(url, {
        email: data.email,
        password: data.password
      })

      if (response.data.status === 'Logged in') {
        setLoggedIn(true)
        const user = response.data.user
        setUser(user)
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
    <section className='bg-gray-100 px-6 lg:px-12 pb-32 pt-48'>
      <div className='bg-white p-12 w-full max-w-xl flex flex-col gap-y-6 m-auto'>
        {error && <div className='font-bold'>⚠️ User or password are incorrect</div>}

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
          ) : (
            <button
              className='bg-black text-white border px-12 h-11 uppercase text-sm hover:bg-white hover:text-black hover:border-black transition-all font-bold'
              onClick={handleLogin}
            >
              Log In
            </button>
          )}
        </div>
        <div className='text-sm'>
          Don't have an account?{' '}
          <Link href='/users/register'>
            <a className='underline-offset-4 hover:underline font-bold decoration-2'>Register</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FormLogin
