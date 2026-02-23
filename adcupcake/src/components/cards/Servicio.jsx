import React from 'react'

export default function Servicio({ servicio }) {

    const { nombre, descripcion } = servicio

    return (
        <div>
            <div className="card w-96 bg-base-100 card-lg shadow-sm hover:scale-105 transition-all">
                <div className="card-body">
                    <h2 className="card-title">{nombre}</h2>
                    <p>{descripcion}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-neutral">Ver ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
