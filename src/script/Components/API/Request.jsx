import { useEffect, useState } from "react"

function Request(Endpoint, id, parameter) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const BaseURL = 'https://api.noroff.dev/api/v1/holidaze'
    let url

    // If Endpoint And ID us true then url will be
    if(Endpoint && id) url = `${BaseURL}/${Endpoint}/${id}`
    if(Endpoint && id && parameter) url = `${BaseURL}/${Endpoint}/${id}?${parameter}`

    useEffect(() => {
        async function Requestdata(){
            try {
                setIsLoading(true)
                setIsError(false)
                const fetching = await fetch(url)
                const json = await fetching.json()
                setData(json)
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
            
        }
        Requestdata()
    }, [])
    return {data, isLoading, isError} 
}

export default Request