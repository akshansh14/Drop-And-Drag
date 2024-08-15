import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white shadow-lg shadow-gray-400 relative flex justify-center items-center w-[full] h-[70px]'>
       <p className='text-3xl tracking-wide'> Drag And Drop Ui </p>
       <div className='absolute bg-white text-black p-2 px-4 cursor-pointer rounded-md right-7 select-none font-semibold ' >
        Add Card
       </div>
    </div>
  )
}

export default Navbar