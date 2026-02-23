import React from 'react'
import Cupcake from '../cards/Cupcake'
import { cupcakes } from '../../data/Cupcakes'
import Hero from '../sections/Hero'
import { useCupcakes } from '../../hooks/useCupcakes'
import Servicios from '../sections/Servicios'
import NotFound from '../ui/NotFound'
import Loading from '../ui/Loading'
import LostConnection from '../ui/LostConnection'

export default function Home() {

    const { datos, loading, error } = useCupcakes("/cupcakes?sabor:eq=Cítrico")

    return (
        <>
            <Hero></Hero>
            <div className='container mx-auto text-center items-center mb-10'>
                {/* Cupcakes */}
                <h1 className='my-10'><p className='badge badge-secondary text-4xl font-extrabold p-5'>El sabor más vendido</p></h1>


                {loading && (
                    <div className='flex justify-center'><Loading /></div>)}

                {error && (
                    <LostConnection />
                )}

                {!loading && !error && datos.length === 0 && (
                    <div className='flex justify-center'>
                        <NotFound />
                    </div>
                )}

                <div className='grid grid-cols-3 gap-10 self-center'>
                    {datos.map(cupcake =>
                        <Cupcake cupcake={cupcake} key={cupcake.id} />
                    )}
                </div >

            </div>
            {/*Servicios*/}
            <section className='bg bg-base-300 text-center pb-10'>
                <div className='container mx-auto text-center items-center mb-10 content-center'>

                    <Servicios />

                </div>
            </section>

        </>
    )
}
