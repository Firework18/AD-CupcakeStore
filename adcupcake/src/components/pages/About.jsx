import React from 'react';

export default function About() {
    return (


        <div className='pb-10 mb-20'>

            <div
                className="hero h-96 text-white mb-10"
                style={{
                    backgroundImage:
                        "url('/img/portada.jpg')",
                }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
                        <p className="py-6 text-lg">
                            Somos un equipo apasionado por crear soluciones digitales increíbles.
                            Nuestro objetivo es transformar ideas complejas en experiencias simples y atractivas.
                        </p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="card bg-base-100 shadow-xl border border-base-200">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-primary">Nuestra Misión</h2>
                            <p className="text-base-content/80 mt-2">
                                Proveer herramientas de alta calidad que faciliten la vida de nuestros usuarios,
                                manteniendo siempre un enfoque en la innovación y el diseño centrado en el usuario.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border border-base-200">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl text-secondary">Nuestra Visión</h2>
                            <p className="text-base-content/80 mt-2">
                                Ser líderes y referentes en el desarrollo de software, destacando por nuestra
                                creatividad, eficiencia y compromiso inquebrantable con la excelencia.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-20'>
                <img
                    src="/img/cupcake-cafe.jpg"
                    alt="imagen-about"
                    className="rounded-xl w-100 h-100 block mx-auto"
                />
                <p className='text-8xl text-center font-extrabold text-primary'>¡Gracias por tu compra!</p>
            </div>

        </div>

    );
}