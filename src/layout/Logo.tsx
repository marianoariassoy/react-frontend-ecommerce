import { Link } from 'wouter'

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <a className='text-xl font-extrabold hover:opacity-50 text-center leading-none'>
          <span className='block lg:inline-block'>CODER</span>
          <span>CLOTHES</span>
        </a>
      </Link>
    </div>
  )
}

export default Logo
