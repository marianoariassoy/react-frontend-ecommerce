import { Link, useLocation } from 'wouter'
import { categories } from '../data'

const Nav = () => {
  const [location] = useLocation()

  return (
    <div className='flex-1 flex-grow'>
      <nav className='flex flex-col items-start w-auto gap-2 uppercase text-xs font-semibold pt-4 [&>a:hover]:underline underline-offset-4 decoration-2'>
        <Link href='/category/all'>
          <a
            className={`${
              location === '/category/all' || (location === '/' && 'underline underline-offset-4 decoration-2')
            }}`}
          >
            All
          </a>
        </Link>
        {categories.map(category => (
          <Link
            href={`/category/${category.toLocaleLowerCase()}`}
            key={category}
          >
            <a
              className={`${
                location === `/category/${category.toLocaleLowerCase()}` && 'underline underline-offset-4 decoration-2'
              } `}
            >
              {category}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav
