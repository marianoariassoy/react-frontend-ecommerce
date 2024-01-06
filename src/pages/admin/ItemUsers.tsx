import { Button, Select } from '../../ui'
import { roles } from '../../data'

const ItemUsers = ({ data, deleteUser, changeRole }) => {
  return (
    <article className='w-full p-6 shadow rounded-lg flex flex-col gap-y-3'>
      <div>
        <h3 className='text-sm font-bold'>
          {data.firstName} {data.lastName}
        </h3>
      </div>

      <div>
        <p className='text-sm opacity-50'>{data.email}</p>
        <p className='text-sm opacity-50'>Last Connection: {data.last_connection}</p>
        <p className='text-sm opacity-50'>ID: {data._id}</p>

        <p className='text-sm opacity-50 font-bold mt-3'>Role</p>
        <Select
          options={roles}
          value={data.role}
          onChange={e => changeRole(data._id, e.target.value)}
        />
      </div>
      <div className='mt-3 flex items-center gap-3'>
        <Button onClick={() => deleteUser(data._id)}>Delete</Button>
      </div>
    </article>
  )
}

export default ItemUsers
