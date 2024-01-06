import ItemUsers from './ItemUsers'

const Users = ({ data, deleteUser, changeRole }) => {
  return (
    <div className='w-full max-w-4xl m-auto grid grid-cols-2 gap-6'>
      {data.map(user => (
        <ItemUsers
          key={user._id}
          data={user}
          deleteUser={deleteUser}
          changeRole={changeRole}
        />
      ))}
    </div>
  )
}

export default Users
