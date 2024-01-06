const ButtonForm = ({ children, onClick }) => {
  return (
    <button
      className='bg-black text-white border px-6 h-11 uppercase text-sm hover:bg-white hover:text-black hover:border-black transition-all font-bold'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonForm
