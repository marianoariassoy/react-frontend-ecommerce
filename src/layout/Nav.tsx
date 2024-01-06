import { Link } from 'wouter'
import { categories } from '../data'

const Nav = () => {
  return (
    <div className='flex-1 flex-grow'>
      <nav className='flex flex-col gap-y-2 uppercase text-xs font-semibold pt-4 [&>a:hover]:underline underline-offset-4 decoration-2'>
        <Link href='/category/all'>
          <a>All</a>
        </Link>
        {categories.map(category => (
          <Link
            href={`/category/${category.toLocaleLowerCase()}`}
            key={category}
          >
            <a>{category}</a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav
