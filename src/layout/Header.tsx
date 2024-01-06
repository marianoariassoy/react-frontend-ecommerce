import TopBar from './TopBar'
import Nav from './Nav'
import Submenu from './Submenu'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='fixed w-full top-0 z-50'>
      <TopBar />

      <div className='flex items-start px-6 lg:px-12 py-4'>
        <Nav />
        <Logo />
        <Submenu />
      </div>
    </div>
  )
}

export default Header
