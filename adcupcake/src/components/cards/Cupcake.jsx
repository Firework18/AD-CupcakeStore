import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { cupcakes } from '../../data/Cupcakes'

export default function Cupcake({ cupcake }) {

    const { nombre, imagen, sabor, stock, precio, descripcion } = cupcake

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

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 transition-all py-5">
                <figure>
                    <img
                        src={`/img/${imagen}`}
                        alt="Shoes"
                        className='rounded-xl h-60 w-70' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {nombre}
                        <div className={`badge ${disponible ? 'badge-primary bg-success' : 'badge-secondary bg-secondary-content'} text-white`}>{disponible ? 'Disponible' : 'Agotado'}</div>
                        <div className="badge badge-warning text-xs py-4">{sabor}</div>
                    </h2>
                    <p>{descripcion}</p>
                    <div className='text-2xl font-extrabold'>Precio: <div className='badge badge-success text-2xl p-5 font-extrabold text-white'>S/. {precio}</div>
                    </div>
                    <div><strong>Stock: {stockC}</strong></div>
                    <div className="card-actions justify-end">

                    </div>
                </div>
                <div className='card-actions self-center'>
                    <button onClick={handleClick} className='btn btn-secondary' disabled={!disponible}>Comprar</button>
                </div>
            </div>
        </>
    )

}

Cupcake.propTypes = {
    cupcake: PropTypes.shape({
        nombre: PropTypes.string,
        imagen: PropTypes.string,
        sabor: PropTypes.string,
        stock: PropTypes.number,
        precio: PropTypes.number,
        descripcion: PropTypes.string
    })
}

Cupcake.defaultProps = {
    imagen: 'https://static.vecteezy.com/system/resources/previews/013/387/891/non_2x/black-and-white-line-style-cupcake-free-vector.jpg'
}
