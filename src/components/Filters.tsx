import { sorts } from '../data/data'
import { Down } from '../icons/icons'

interface Props {
  options: { page: number; limit: number; category: string; sort: string }
  setOptions: (options: { page: number; limit: number; category: string; sort: string }) => void
  totalDocs: number
}

const Filters = ({ options, setOptions, totalDocs }: Props) => {
  const handleSort = e => {
    e.preventDefault()
    const value = e.target.value
    const sort = value === 'Minor price to higher' ? 'asc' : 'desc'
    if (sort) setOptions({ ...options, sort })
  }

  return (
    <div className='mb-12 flex flex-col lg:flex-row items-center gap-2'>
      <div className='flex-grow flex-1 text-sm'>
        <span className='font-semibold'>Total Products: {totalDocs}</span>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-2'>Latest Products</h2>
      </div>
      <div className='flex-grow flex-1 flex justify-end items-center gap-x-2'>
        <Down />
        <select
          name='price-order'
          id='price-order'
          className='bg-white border-black border-2 p-2 text-sm px-2'
          onChange={handleSort}
        >
          <option value='0'>Order By</option>
          {sorts.map(sort => (
            <option
              key={sort}
              value={sort}
            >
              {sort}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
