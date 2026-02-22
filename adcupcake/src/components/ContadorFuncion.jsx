import React, { useState } from 'react'

export default function ContadorFuncion() {

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        const nuevoValor = contador + 1
        setContador(nuevoValor)
    }

    return (
        <div className='bg-black text-white font-bold p-2'>
            <div className='grid-cols-3'></div>
            <h2 className='text-3xl font-extrabold uppercase'>Contador (Funcion)</h2>
            <p className='text-2xl m-10'>{contador}</p>
            <button onClick={handleClick} className='bg-red-600 p-3 rounded-sm hover:scale-105 transition-all'>
                Incrementar
            </button>
        </div>
    )
}
