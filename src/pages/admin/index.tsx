import { useState } from 'react'
import { useLocation } from 'wouter'
import axios from 'axios'
import Users from './Users'
import { useDataContext } from '../../hooks/useUserContext'
import { BeatLoader } from 'react-spinners'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'

const Admin = () => {
  const { loggedIn, user, apiUrl } = useDataContext()
  const [location, setLocation] = useLocation()
  const [isloading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { data, loading } = useFetch(`/users`)

  console.log(location)

  if (!loggedIn || user.role !== 'admin') {
    return (
      <Layout>
        <h1 className='text-center px-6 lg:px-12 pt-48'>You are not allowed to view this page</h1>
      </Layout>
    )
  }

  const deleteUser = async uid => {
    const url = `${apiUrl}/users/${uid}`

    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.status === 200) {
        setLocation('/users/admin/sucess')
      } else {
        setError('Error al realizar la solicitud')
      }
      setLoading(false)
    } catch (error) {
      setError(error.response.data.error)
      setLoading(false)
    }
  }

  const changeRole = async (uid, role) => {
    const url = `${apiUrl}/users/${uid}`

    try {
      setLoading(true)
      const response = await axios.put(url, {
        role
      })

      if (response.data.status === 'User updated') {
        setLocation('/users/admin/sucess')
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
      <section className='px-6 lg:px-12 pt-48'>
        <h1 className='text-center font-bold text-xl mb-12'>ACTIVE USERS ({data && data.length})</h1>
        {error && <p className='text-center mb-12 font-bold'>⚠️ {error}</p>}

        {loading || isloading ? (
          <div className='flex items-center justify-center'>
            <BeatLoader />
          </div>
        ) : (
          <Users
            data={data}
            deleteUser={deleteUser}
            changeRole={changeRole}
          />
        )}
      </section>
    </Layout>
  )
}

export default Admin
