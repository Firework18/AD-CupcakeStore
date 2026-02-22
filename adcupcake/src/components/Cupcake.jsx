import React, { Component, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Cupcake({ cupcake }) {

    const { nombre, imagen, sabor, id, stock, precio } = cupcake

    const [stockC, setStockC] = useState(stock)
    const [disponible, setDisponible] = useState(true)

    const handleClick = () => {

        try {
            if (stockC > 0) {
                setStockC(prev => prev - 1)
            }
            console.log('exito')
            toast.success('Producto comprado exitosamente!')
        } catch (error) {
            console.log(error)
            toast.error('No se puede comprar')
        }

    }

    useEffect(() => {
        if (stockC == 0) {
            setDisponible(false)
        }
    }, [stockC])

    useEffect(() => {
        console.log('Estamos por iniciar el componente', Date.now())
    }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center shadow-2xl gap-3 hover:scale-105 transition-all">
                <img src={`../../public/img/${imagen}`} className='h-50 w-full items-center' alt={nombre} />
                <h3 className='font-extrabold text-2xl'>{nombre}</h3>
                <p><strong>Stock:</strong> {stockC}</p>
                <div><strong>Estado: </strong><p className={`font-bold text-white p-2 ${(disponible ? 'bg-green-400' : 'bg-red-600')}`} >{disponible ? 'Disponible' : 'Agostado'}</p></div>
                <p>Sabor <strong className=''>{sabor}</strong></p>
                <div><strong>Precio: </strong><p className='font-extrabold text-2xl bg-green-500 text-white rounded-md p-2'>{precio}</p></div>
                <button onClick={handleClick} className='bg-blue-300 p-3 text-white uppercase font-extrabold rounded-md hover:bg-blue-500 transition-all w-full disabled:hover:bg-blue-300' disabled={!disponible}>comprar</button>
            </div>
        </>
    )

}
