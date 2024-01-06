import { Link } from 'wouter'
import { useDataContext } from '../hooks/useUserContext'

const Submenu = () => {
  const { loggedIn, setLoggedIn, user, setUser } = useDataContext()

  const handleLogout = () => {
    setLoggedIn(false)
    setUser(null)
  }

  return (
    <div className='flex items-center justify-end gap-x-6 flex-1 flex-grow text-xs pt-4 font-semibold underline-offset-4 decoration-2'>
      <Link href='/carts'>
        <a className='hover:underline uppercase'>My Bag (0)</a>
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
        <Link href='/users'>
          <a className='hover:underline uppercase'>LogIn</a>
        </Link>
      )}
    </div>
  )
}

export default Submenu
