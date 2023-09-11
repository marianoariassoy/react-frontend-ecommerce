interface Props {
  options: { page: number; limit: number; category: string; sort: string }
  setOptions: (options: { page: number; limit: number; category: string; sort: string }) => void
}

const Limits = ({ options, setOptions }: Props) => {
  return (
    <div className='mb-20 text-center'>
      {options.limit === 5 ? (
        <>
          <h2 className='text-2xl font-bold'>Top 5 Products</h2>
          <button
            className='hover:underline cursor-pointer text-sm'
            onClick={() => setOptions({ ...options, limit: 0, category: 'all', sort: '' })}
          >
            View All Products
          </button>
        </>
      ) : (
        <>
          <h2 className='text-2xl font-bold'>All Products</h2>
          <button
            className='hover:underline cursor-pointer text-sm'
            onClick={() => setOptions({ ...options, limit: 5, category: 'all', sort: '' })}
          >
            View Top 5 Products
          </button>
        </>
      )}
    </div>
  )
}

export default Limits
