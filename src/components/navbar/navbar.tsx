import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'

import logo from '@/assets/logo/logo.svg'

export const NavBar = () => (
  <div className='flex items-center justify-between py-9'>
    <Image src={logo} width={200} height='100%' alt='Scally Electrical' />
    <a href='tel:tel:0274324978'>
      <button
        className='m-4 ml-0 flex items-center rounded-md bg-brand px-4 py-2'
        type='button'
        style={{ transition: 'all .5s ease-in-out' }}
      >
        <FaPhone className='md:mr-2' /> <span className='hidden md:block'>Call Now</span>
      </button>
    </a>
  </div>
)
