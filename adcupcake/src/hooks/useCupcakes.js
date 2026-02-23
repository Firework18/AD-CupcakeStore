import { useEffect, useState } from "react"

export const useCupcakes = (query = '') => {

    const [cupcakes, setCupcakes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        fetch(`${import.meta.env.VITE_API_URL}/cupcakes${query}`)
            .then(res => res.json())
            .then(data => setCupcakes(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [query])

    return (
        { cupcakes, loading, error }
    )
}
