const Filters = () => {
  return (
    <div className='flex gap-x-4 text-sm justify-center mb-12'>
      <select
        name='category'
        id='category'
        className='bg-white border-black border p-2'
      >
        <option value='0'>Select Category</option>
        <option value='1'>Category 1</option>
        <option value='1'>Category 2</option>
        <option value='1'>Category 3</option>
      </select>

      <select
        name='price-order'
        id='price-order'
        className='bg-white border-black border p-2'
      >
        <option value='0'>Select Order</option>
        <option value='1'>Minor price to higher</option>
        <option value='1'>Higher price to minor</option>
      </select>
    </div>
  )
}

export default Filters
