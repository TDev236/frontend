import React from 'react'
import Categoria from './Categoria'

const datosCategoria = [
    {
        nombre: 'Con Mensajes',
        imagen : "https://images.pexels.com/photos/1832562/pexels-photo-1832562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        nombre: 'Para Relajar',
        imagen : "https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        nombre: 'Para Regalo',
        imagen : "https://images.pexels.com/photos/1498319/pexels-photo-1498319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        nombre: 'Para Aromatizar',
        imagen : "https://images.pexels.com/photos/33197/tealight-candles-tea-lights-wax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
]

const Categorias = () => {
  return (
    <div className='grid grid-cols-4 '>
        
        {datosCategoria.map(dato => {
            return(
                <Categoria
                    nombre = {dato.nombre}
                    imagen = {dato.imagen}
                />
            )
        })}
    </div>
  )
}

export default Categorias