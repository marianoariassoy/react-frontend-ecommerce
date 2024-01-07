import { sorts } from '../../data'
import { Down } from '../../components/icons'

interface Props {
  options: { page: number; limit: number; category: string; sort: string }
  setOptions: (options: { page: number; limit: number; category: string; sort: string }) => void
  totalDocs: number
  category: string
}

const Filters = ({ options, setOptions, totalDocs, category }: Props) => {
  const handleSort = e => {
    e.preventDefault()
    const value = e.target.value
    const sort = value === 'Minor price to higher' ? 'asc' : 'desc'
    if (sort) setOptions({ ...options, sort })
  }

  return (
    <div className='mb-6 lg:mb-12 flex flex-col lg:flex-row items-center gap-2'>
      <div className='flex-grow flex-1 text-sm'>
        <span className='font-semibold'>Products: {totalDocs}</span>
      </div>
      <div>
        <h2 className='lg:text-xl font-bold mb-2 uppercase'>{category === 'all' ? 'Latest Products' : category}</h2>
      </div>
      <div className='flex-grow flex-1 flex justify-end items-center gap-x-2'>
        <Down />
        <select
          name='price-order'
          id='price-order'
          className='bg-white border-black border-2 p-2 text-sm px-2 appearance-none'
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
