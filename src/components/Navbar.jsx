import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between py-2 px-2 items-center'>
        <div>
            Logo
        </div>
        <div className='flex items-center justify-center space-x-4 '>
            <div className='flex items-center space-x-1 '>
                <AiOutlineUser className='text-xl font-bold'/>
                <p>Cuenta</p>
            </div>
            <div className='flex items-center space-x-1'>
                <AiOutlineShoppingCart className='text-xl font-bold'/>
                <p>Carrito</p>
            </div>
        </div>
        <AiOutlineMenu/>
    </div>
  )
}

export default Navbar