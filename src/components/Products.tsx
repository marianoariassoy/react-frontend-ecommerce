import { useState } from 'react'
import Pagination from './Pagination'
import ProductsItem from './ProductsItem'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import Filters from '../components/Filters'
import Limits from '../components/Limits'

const Products = () => {
  const [options, setOptions] = useState({
    page: 1,
    limit: 5,
    category: '',
    sort: ''
  })

  const { data, loading } = useFetch(
    `/products?page=${options.page}&limit=${options.limit}&category=${options.category}&sort=${options.sort}`
  )

  if (loading) return <Loader />

  return (
    <section>
      <Filters
        options={options}
        setOptions={setOptions}
      />

      <Limits
        options={options}
        setOptions={setOptions}
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
    </section>
  )
}

export default Products
