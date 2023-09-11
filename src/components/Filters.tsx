interface Props {
  options: { page: number; limit: number; category: string; sort: string }
  setOptions: (options: { page: number; limit: number; category: string; sort: string }) => void
}

const Filters = ({ options, setOptions }: Props) => {
  const categories = ['Remeras', 'Camisas', 'Pantalones']
  const sorts = ['Minor price to higher', 'Higher price to minor']

  const handleCategory = e => {
    e.preventDefault()
    const category = e.target.value
    if (!category) return
    setOptions({ ...options, category })
  }

  const handleSort = e => {
    e.preventDefault()
    const value = e.target.value
    const sort = value === 'Minor price to higher' ? 'asc' : 'desc'
    if (sort) setOptions({ ...options, sort })
  }

  return (
    <div className='flex gap-x-4 text-sm justify-center mb-12'>
      <select
        name='category'
        id='category'
        className='bg-white border-black border p-2 cursor-pointer'
        onClick={handleCategory}
      >
        <option value=''>Select Category</option>
        <option value='all'>All</option>
        {categories.map(category => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      <select
        name='price-order'
        id='price-order'
        className='bg-white border-black border p-2'
        onClick={handleSort}
      >
        <option value='0'>Select Order</option>
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
  )
}

export default Filters
