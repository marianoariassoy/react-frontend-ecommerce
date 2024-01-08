import { useDataContext } from '../../hooks/useUserContext'

const Welcome = () => {
  const { user } = useDataContext()

  return (
    <section className='px-6 lg:px-12'>
      <div className='text-center flex flex-col gap-y-6 text-sm'>
        <div>
          <p className='font-bold'>
            Welcome {user.firstName} {user.lastName}!
          </p>
          <p>{user.email}</p>
        </div>
        <div>
          <p>
            🔑 You are {user.role === 'admin' ? 'an' : 'a'} {user.role} user
          </p>
        </div>
        <div>
          <p className='font-bold'>🕛 Last Connection</p>
          <p>{user.last_connection}</p>
        </div>
      </div>
    </section>
  )
}

export default Welcome
