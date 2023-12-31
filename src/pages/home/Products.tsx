import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import Pagination from './Pagination'
import ProductsItem from './ProductsItem'
import useFetch from '../../hooks/useFetch'
import Filters from './Filters'
import { BeatLoader } from 'react-spinners'

const Products = () => {
  const location = useLocation()[0]

  const [options, setOptions] = useState({
    page: 1,
    limit: 4,
    category: 'all',
    sort: ''
  })

  useEffect(() => {
    setLoading(true)
    const category = location.split('/')[2]
    category && setOptions({ ...options, category, page: 1 })
  }, [location])

  const { data, loading, setLoading } = useFetch(
    `/products?page=${options.page}&limit=${options.limit}&category=${options.category}&sort=${options.sort}`
  )

  if (loading)
    return (
      <div className='mt-48 flex items-center justify-center'>
        <BeatLoader />
      </div>
    )

  return (
    <div>
      <Filters
        options={options}
        setOptions={setOptions}
        totalDocs={data.totalDocs}
        category={options.category}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12'>
        {data.docs.map(item => (
          <ProductsItem
            key={item._id}
            data={item}
          />
        ))}
      </div>

      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        prevPage={data.prevPage}
        nextPage={data.nextPage}
        options={options}
        setOptions={setOptions}
      />
    </div>
  )
}

export default Products
