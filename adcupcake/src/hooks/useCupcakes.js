import axios from "axios"
import { useEffect, useState } from "react"

export const useCupcakes = (query = '') => {

    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        axios.get(`${import.meta.env.VITE_API_URL}${query}`)
            .then(({ data }) => setDatos(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [query])

    return (
        { datos, loading, error }
    )
}
