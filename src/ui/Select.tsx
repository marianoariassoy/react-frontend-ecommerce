const Select = ({ options, value, onChange }) => {
  return (
    <select
      onChange={onChange}
      className='w-full border-b border-black h-11 bg-white cursor-pointer rounded-none text-sm'
    >
      {options.map((item, index) => {
        return (
          <option
            key={index}
            selected={item === value}
          >
            {item}
          </option>
        )
      })}
    </select>
  )
}

export default Select
