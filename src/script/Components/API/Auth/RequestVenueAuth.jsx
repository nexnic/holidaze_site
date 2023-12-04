import { useEffect, useState } from "react"

function RequestVenueAuth (name, accessToken) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() =>  {
        async function getData(){
            try {
                setIsLoading(true);
                setIsError(false)
                const fetchedData = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/venues?_owner=true`, 
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-type': 'application/json; charset=UFT-8',
                    }
                })
                const responseData = await fetchedData.json()
                if(fetchedData.status) {
                    setData(responseData)
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [name, accessToken])
    return {data, isLoading, isError}
}

export default RequestVenueAuth