import { Link } from 'wouter'
import { useDataContext } from '../hooks/useUserContext'
import useFetch from '../hooks/useFetch'
import { User } from '../components/icons'

const Submenu = () => {
  const { loggedIn, setLoggedIn, user, setUser, cid } = useDataContext()
  const { data, loading } = useFetch(`/carts/${cid}`)

  const handleLogout = () => {
    setLoggedIn(false)
    setUser(null)
  }

  return (
    <div className='flex flex-col items-end gap-2 flex-1 flex-grow text-xs pt-4 font-semibold underline-offset-4 decoration-2'>
      {loggedIn && (
        <div className='flex gap-x-1 items-center'>
          <User /> {user.firstName + ' ' + user.lastName}
        </div>
      )}
      <Link href='/cart'>
        <a className='hover:underline uppercase'>My Bag ({!loading ? data.products.length : 0})</a>
      </Link>
      {loggedIn ? (
        <>
          <button
            onClick={handleLogout}
            className='uppercase hover:underline decoration-2'
          >
            LogOut
          </button>
          {user.role === 'admin' && (
            <Link href='/users/admin'>
              <a className='hover:underline uppercase'>Admin</a>
            </Link>
          )}
        </>
      ) : (
        <Link href='/login'>
          <a className='hover:underline uppercase'>LogIn</a>
        </Link>
      )}
    </div>
  )
}

export default Submenu
