import Pagination from './Pagination'
import ProductsItem from './ProductsItem'

type Props = {
  title: string
}
const Products = ({ title }: Props) => {
  return (
    <section>
      <h2 className='text-center text-2xl font-bold mb-20 max-w-md m-auto'>{title}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12'>
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
      </div>

      <Pagination />
    </section>
  )
}

export default Products
