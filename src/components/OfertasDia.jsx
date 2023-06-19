import React, { useEffect, useState } from 'react'
import Producto from './Producto'

const OfertasDia = () => {
    const [datos, setDatos] = useState([])
    const [descripcion, setDescripcion] = useState('')

    const shortWord = ({palabra, longitudMaxima}) => {
        palabra.length <= longitudMaxima ? setDescripcion(palabra) :
        setDescripcion(palabra.substring(0, longitudMaxima))
    }
    useEffect(() => {
        const fetchFakeData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=4');
                const jsonData = await response.json();
                setDatos(jsonData);
            } catch(error) {
                console.log(error);
            }

        };

        fetchFakeData();
    }, []);
    
  return (
    <div>
        <div className='grid grid-cols-2'>
            {datos.map(dato => {
                return(
                    <div className='flex flex-col'>
                        <p>{dato.title}</p>
                        <p className='text-xs'>{dato.description.slice(0, 100)}</p>
                        <p>${dato.price}</p>
                        <p>{dato.rating.rate}</p>
                    </div>
                )
            })}
        </div>
        
        <Producto/>
    </div>
  )
}

export default OfertasDia