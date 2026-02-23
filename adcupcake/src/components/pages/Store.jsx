import React, { useEffect, useState } from 'react'
import Cupcake from '../cards/Cupcake'
import { cupcakes } from '../../data/Cupcakes'
import { useCupcakes } from '../../hooks/useCupcakes'
import { toast } from 'react-toastify'
import NotFound from '../ui/NotFound'
import Loading from '../ui/Loading'
import LostConnection from '../ui/LostConnection'

export default function Store() {

    const [search, setSearch] = useState('')

    const { datos, loading, error } = useCupcakes('/cupcakes')

    const filtered = datos.filter(cupcake =>
        cupcake.nombre.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className='mb-20'>
            <div className='container mx-auto text-center'>


                <div>
                    <h1 className='my-10'><p className='badge badge-secondary text-4xl font-extrabold p-5'>Compra tus Cupcakes</p></h1>

                    <div className="join gap-2 mb-10">
                        <div className='self-center'>Introduzca su búsqueda: </div>
                        <div>
                            <label className="input validator join-item">

                                <input type="text" placeholder="Cupcake de ..." required
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </label>
                            <div className="validator-hint hidden">Ingresa un nombre válido</div>
                        </div>
                    </div>

                    {loading && (
                        <div className='flex justify-center'><Loading /></div>)}

                    {error && (
                        <LostConnection />
                    )}


                    {!loading && !error && filtered.length === 0 && (
                        <div className='flex justify-center'>
                            <NotFound />
                        </div>
                    )}


                    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {filtered.map(cupcake => (
                            <Cupcake cupcake={cupcake} key={cupcake.id} />
                        ))}
                    </div>



                </div>

            </div>
        </div>
    )
}
