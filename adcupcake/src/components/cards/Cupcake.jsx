import React, { Component, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Cupcake({ cupcake }) {

    const { nombre, imagen, sabor, id, stock, precio, descripcion } = cupcake

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
            <div class="card bg-base-100 w-96 shadow-sm hover:scale-105 transition-all py-5">
                <figure>
                    <img
                        src={`../../public/img/${imagen}`}
                        alt="Shoes"
                        className='rounded-xl h-60 w-70' />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {nombre}
                        <div class={`badge badge-${disponible ? 'primary' : 'secondary'}`}>{disponible ? 'Disponible' : 'Agotado'}</div>
                        <div class="badge badge-warning text-xs py-4">{sabor}</div>
                    </h2>
                    <p>{descripcion}</p>
                    <div className='text-2xl font-extrabold'>Precio: <div className='badge badge-success text-2xl p-5 font-extrabold text-white'>S/. {precio}</div>
                    </div>
                    <div class="card-actions justify-end">

                    </div>
                </div>
                <div className='card-actions self-center'>
                    <button onClick={handleClick} className='btn btn-secondary' disabled={!disponible}>Comprar</button>
                </div>
            </div>
        </>
    )

}
