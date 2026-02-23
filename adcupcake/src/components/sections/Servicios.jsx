import React from 'react'
import { useCupcakes } from '../../hooks/useCupcakes'

export default function Servicios() {

    const { datos, error, loading } = useCupcakes('/servicios')

    return (
        <div>

        </div>
    )
}
