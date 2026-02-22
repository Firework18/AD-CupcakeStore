import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <div
                className="hero h-96"
                style={{
                    backgroundImage:
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Cupcake Store</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to='/store'><button className="btn btn-primary">Ver Cupcakes</button></Link>
                    </div>
                </div>
            </div >
        </>
    )
}
