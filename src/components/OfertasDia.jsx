import React, { useEffect, useState } from 'react'


const OfertasDia = () => {
    const [datos, setDatos] = useState([])
    


    

    useEffect(() => {
        const fetchFakeData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=6');
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
        <div className='grid grid-cols-2 place-items-center space-x-2 md:flex md:justify-center md:items-center'>
            {datos.map(dato => {
                return(
                    <div className='flex flex-col items-center justify-between w-[180px] h-[360px] gap-4 md:gap-0 shadow-lg py-4 px-4 rounded-lg md:w-[310px] md:h-[320px] md:flex md:flex-col md:justify-between md:items-center' >
                        <p className='uppercase text-sm font-bold'>{dato.title}</p>
                        <p className='text-xs'>{`${dato.description.slice(0, 100)} ...`}</p>
                        <div className='relative'>
                            <p className='font-bold text-xl md:absolute right-14'><span className='text-2xl space-x-2'>$</span>{dato.price}</p>
                        </div>
                        <p>{dato.rating.rate}</p>
                        <p
                            className='bg-purple-600 text-sm  cursor-pointer text-white uppercase font-bold p-2'
                            
                        >
                            Agregar Carrito
                        </p>
                    </div>
                )
            })}
        </div>
        
        
    </div>
  )
}

export default OfertasDia