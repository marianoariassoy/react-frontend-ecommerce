import { useState } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Users from './Users'
import { useDataContext } from '../../hooks/useUserContext'
import useFetch from '../../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import axios from 'axios'

const Admin = () => {
  const { loggedIn, user, apiUrl } = useDataContext()
  const [location, setLocation] = useLocation()
  const [isloading, setLoading] = useState(false)
  const [error, setError] = useState(false)
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
      const response = await axios.delete(url, {})

      if (response.data.status === 'User deleted') {
        console.log('Usuario eliminado')
        setLocation('/users/admin/sucess')
      } else {
        console.log('Algo salio mal')
        setError(true)
      }
      setLoading(false)
    } catch (error) {
      setError(true)
      console.error('Error al realizar la solicitud:', error)
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
        console.log('Usuario modificado')
        setLocation('/users/admin/sucess')
      } else {
        console.log('Algo salio mal en el changeRole')
        setError(true)
      }
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
      console.error('Error al realizar la solicitud:', error)
    }
  }

  return (
    <Layout>
      <section className='px-6 lg:px-12 pt-48'>
        <h1 className='text-center font-bold text-xl mb-12'>ACTIVE USERS ({data && data.length})</h1>
        {error && <p className='text-center mb-12 text-red-500'>Error al modificar un usuario</p>}

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
