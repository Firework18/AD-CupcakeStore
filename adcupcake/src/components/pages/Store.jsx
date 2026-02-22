import React, { useEffect, useState } from 'react'
import Cupcake from '../cards/Cupcake'
import { cupcakes } from '../../data/Cupcakes'

export default function Store() {

    const [cupcakes, setCupcakes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cupcakes").then(response => response.json()).then(data => setCupcakes(data))
    }, [])

    return (
        <div className='mb-20'>
            <div className='container mx-auto text-center'>
                <h1 className='my-10'><p className='badge badge-secondary text-4xl font-extrabold p-5'>Compra tus Cupcakes</p></h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-y-5'>
                    {cupcakes.map(cupcake => (
                        <Cupcake cupcake={cupcake} key={cupcake.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
