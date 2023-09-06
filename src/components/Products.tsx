import Pagination from './Pagination'
import ProductsItem from './ProductsItem'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

type Props = {
  title: string
}
const Products = ({ title }: Props) => {
  const { data, loading } = useFetch(`/products.json`)

  if (loading) return <Loader />

  return (
    <section>
      <h2 className='text-center text-2xl font-bold mb-20 max-w-md m-auto'>{title}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12'>
        {data &&
          data.map(item => (
            <ProductsItem
              key={item.id}
              data={item}
            />
          ))}
      </div>

      <Pagination />
    </section>
  )
}

export default Products
