import { Link, useLocation } from 'wouter'
import { useDataContext } from '../hooks/useUserContext'
import useFetch from '../hooks/useFetch'
import { User } from '../components/icons'

const Submenu = () => {
  const { loggedIn, setLoggedIn, user, setUser, cid } = useDataContext()
  const { data, loading } = useFetch(`/carts/${cid}`)
  const [, navigate] = useLocation()

  const handleLogout = () => {
    setLoggedIn(false)
    setUser(null)
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className='flex flex-col items-end gap-2 flex-1 flex-grow text-xs font-semibold [&>a:hover]:underline  underline-offset-4 decoration-2 uppercase'>
      {loggedIn && (
        <div className='gap-x-1 items-center justify-end text-right hidden lg:flex'>
          <User />
          <Link href='/login'>
            <a className='hover:underline underline-offset-4 decoration-2'>{user.firstName + ' ' + user.lastName}</a>
          </Link>
        </div>
      )}
      <Link href='/cart'>
        <a>My Bag ({!loading ? data.products.length : 0})</a>
      </Link>
      {loggedIn ? (
        <>
          <button
            onClick={handleLogout}
            className='uppercase hover:underline decoration-2'
          >
            Logout
          </button>
          {user.role === 'admin' && (
            <Link href='/users/admin'>
              <a>Users</a>
            </Link>
          )}
        </>
      ) : (
        <Link href='/login'>
          <a>Login</a>
        </Link>
      )}
    </div>
  )
}

export default Submenu
