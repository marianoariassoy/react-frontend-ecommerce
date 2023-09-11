import { Link } from 'wouter'

const Header = () => {
  return (
    <div className='fixed flex w-full top-0 z-50 items-center bg-white/50 backdrop-blur-md px-6 py-4 border-b'>
      <div className='flex-1 flex-grow'></div>
      <div>
        <Link href='/'>
          <a className='text-xl font-bold hover:opacity-50 transition-all'>CODERHOUSE 55525</a>
        </Link>
      </div>
      <div className='flex items-center justify-end gap-x-2 flex-1 flex-grow text-xs'>
        <Link href='/carts/64fd26c7e7ae10b0235dd181'>
          <a className='cursor-pointer hover:underline'>My Bag (2)</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
