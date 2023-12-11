import { useEffect, useState } from "react"

function RequestAPILim (limit, offset) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function Requestedata(){
            try {
                setIsLoading(true)
                setIsError(false)
                const fetching = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues?limit=${limit}&offset=${offset}`)
                const json = await fetching.json()
                setData(json)
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false) 
            }

        }
        Requestedata()
    }, [limit, offset])
    
    return {data, isLoading, isError}
}

export default RequestAPILim