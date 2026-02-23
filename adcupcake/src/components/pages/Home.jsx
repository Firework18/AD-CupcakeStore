import React from 'react'
import Cupcake from '../cards/Cupcake'
import { cupcakes } from '../../data/Cupcakes'
import Hero from '../sections/Hero'
import { useCupcakes } from '../../hooks/useCupcakes'

export default function Home() {

    const { cupcakes } = useCupcakes("?sabor:eq=Cítrico")

    return (
        <>
            <Hero></Hero>
            <div className='container mx-auto text-center items-center mb-10'>
                <h1 className='my-10'><p className='badge badge-secondary text-4xl font-extrabold p-5'>El sabor más vendido</p></h1>

                <div className='grid grid-cols-3 gap-10 self-center'>
                    {cupcakes.map(cupcake =>
                        <Cupcake cupcake={cupcake} key={cupcake.id} />

                    )}

                </div >
            </div>

        </>
    )
}
