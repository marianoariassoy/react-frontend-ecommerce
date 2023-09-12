import { Link } from 'wouter'
import TopBar from './TopBar'
import { categories } from '../data/data'

const Header = () => {
  return (
    <div className='fixed w-full top-0 z-50'>
      <TopBar />
      <div className='flex items-start px-6 lg:px-12 py-4'>
        <div className='flex-1 flex-grow flex flex-col gap-y-2 uppercase text-xs font-semibold pt-4 [&>a:hover]:underline'>
          <Link href='/category/all'>
            <a href='#'>All</a>
          </Link>
          {categories.map(category => (
            <Link
              href={`/category/${category.toLocaleLowerCase()}`}
              key={category}
            >
              <a href='#'>{category}</a>
            </Link>
          ))}
        </div>
        <div>
          <Link href='/'>
            <a className='text-xl font-bold hover:opacity-50 transition-all'>BACKEND 55525</a>
          </Link>
        </div>
        <div className='flex items-center justify-end gap-x-2 flex-1 flex-grow text-xs pt-4'>
          <Link href='/carts/64fd26c7e7ae10b0235dd181'>
            <a className='cursor-pointer hover:underline font-semibold'>My Bag (2)</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
