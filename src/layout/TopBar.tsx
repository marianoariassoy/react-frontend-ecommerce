import { Close, Truck } from '../icons/icons'

const TopBar = () => {
  const closeTopBar = () => {
    document.querySelector('.top-bar').classList.add('hidden')
  }

  return (
    <div className='top-bar bg-black text-white text-center p-6 relative flex flex-col lg:flex-row gap-2 items-center justify-center'>
      <Truck />
      <span className='text-sm uppercase'>SAME DAY shipments in 24 hours if you buy before 1:00 p.m.</span>
      <button
        className='absolute right-4 text-xl'
        onClick={closeTopBar}
      >
        <Close />
      </button>
    </div>
  )
}

export default TopBar
