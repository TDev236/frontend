import React from 'react'
import Navbar from './Navbar'
import { AiFillPhone, AiOutlineArrowDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { FaArrowDown } from 'react-icons/fa'
import Categorias from './Categorias'
import OfertasDia from './OfertasDia'

const Layout = ({children}) => {
  return (
    <div>
        <header className='text-sm py-4 space-y-2 bg-purple-600 text-white font-semibold md:space-y-0 md:flex md:justify-between md:items-center md:px-4'>
            <div className='flex items-center justify-center'>
                <AiFillPhone/>
                <p>+3175912109</p>
            </div>

            <div className='flex justify-center space-x-2'>
                <p className='text-center'>Obten 50% en Productos Seleccionados</p>
                <p>|  <Link>Comprar Ahora</Link></p>
            </div>

            <div className='flex items-center justify-center space-x-6'>
                <div className='flex items-center space-x-2'>
                    <p>Esp</p>
                    <AiOutlineArrowDown/>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    <p>Localización</p>
                    <AiOutlineArrowDown/>
                </div>
            </div>
        </header>
        <Navbar/>
        <main>
            <p className='text-center uppercase p-4 font-bold text-xl'>Categorias</p>
            <Categorias/>
            <p className='text-center uppercase p-4 font-bold text-xl mt-4'>Ofertas del Dia</p>
            <OfertasDia/>
        </main>
    </div>
  )
}

export default Layout