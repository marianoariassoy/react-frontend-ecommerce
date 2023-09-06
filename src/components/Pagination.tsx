const Pagination = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className='flex justify-center mt-16 text-sm'>
      <ul className='flex items-center gap-x-4 '>
        <li>
          <a href='#'>Prev</a>
        </li>
        <li>
          <a href='#'>1</a>
        </li>
        <li>
          <a href='#'>2</a>
        </li>
        <li>
          <a href='#'>3</a>
        </li>
        <li>
          <a href='#'>Next</a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
