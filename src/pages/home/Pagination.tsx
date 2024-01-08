interface Props {
  page: number
  totalPages: number
  prevPage: number
  nextPage: number
  options: { page: number; limit: number; category: string; sort: string }
  setOptions: (options: { page: number; limit: number; category: string; sort: string }) => void
}

const Pagination = ({ page, totalPages, prevPage, nextPage, options, setOptions }: Props) => {
  return (
    <div className='flex justify-center mt-16 text-sm'>
      <ul className='flex items-center gap-x-4 [&>li>button:hover]:opacity-50'>
        <li>
          {prevPage ? (
            <button onClick={() => setOptions({ ...options, page: page - 1 })}>Prev</button>
          ) : (
            <span className='opacity-50'>Prev</span>
          )}
        </li>

        {[...Array(totalPages)].map((_, i) => (
          <li key={i}>
            <button
              className={`${i + 1 === page ? 'font-bold' : ''}`}
              onClick={() => setOptions({ ...options, page: i + 1 })}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          {nextPage ? (
            <button onClick={() => setOptions({ ...options, page: page + 1 })}>Next</button>
          ) : (
            <span className='opacity-50'>Next</span>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Pagination
