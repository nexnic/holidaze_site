import { useEffect, useState } from "react"

/**
 * Request API 
 * @returns 
 */
function RequesteAPI () {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function Requestedata(){
            try{
                setIsLoading(true)
                setIsError(false)
                const fetching = await fetch('https://api.noroff.dev/api/v1/holidaze/venues')
                const json = await fetching.json()
                setData(json)
            } catch (error){
                console.log(error)
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        Requestedata()
    }, [])
    return {data, isLoading, isError}
}

export default RequesteAPI