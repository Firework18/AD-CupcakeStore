import React from 'react'
import { useCupcakes } from '../../hooks/useCupcakes'
import Servicio from '../cards/Servicio'

export default function Servicios() {

    const { datos, error, loading } = useCupcakes('/servicios')

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>

    }

    return (
        <div>
            <h1 className='my-10'><p className='badge badge-accent text-4xl font-extrabold p-5'>Explora Nuestros Servicios</p></h1>
            <div className='grid grid-cols-3 gap-10 self-center'>
                {datos.map(servicio =>
                    <Servicio servicio={servicio} key={servicio.id} />
                )}
            </div >



        </div>
    )
}
