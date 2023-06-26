import React from 'react'
import { Link } from 'react-router-dom'



const Categoria = ({nombre, imagen}) => {
  return (
    <div className='col-span-2 relative md:mx-auto md:col-span-1'>
        <Link to="/categorias" className=' hover:text-white'>
            <p className='absolute hover:bg-black bottom-5 bg-white p-4 font-bold uppercase hover:shadow-xl transition-shadow duration-200'>{nombre}</p>
        </Link>
        <img
            src={imagen}
            alt={nombre}
            className='object-cover h-48 w-72 md:h-80 md:w-[800px]'

        />
    </div>
  )
}

export default Categoria