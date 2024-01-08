const Input = ({ type, name, title, placeholder, value, onChange }) => {
  return (
    <>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={name}
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className='appearance-none border border-black w-full h-11 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
      />
    </>
  )
}

export default Input
