import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <ul className=' text-white p-3  flex justify-center bg-gray-900'>
            <Link href='/'><li className='cursor-pointer mx-2 rounded-md hover:bg-red-100'>home</li></Link>
            <Link href='/about'><li className='cursor-pointer'>about</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar