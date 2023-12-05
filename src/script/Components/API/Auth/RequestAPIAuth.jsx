import { useEffect, useState } from "react"

function RequestAPIAuth (UserName,Token){

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function getData(){

            try {
                setIsLoading(true);
                setIsError(false)

                const fetchedData = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${UserName}`,{
                    method: 'GET',
                    headers:{
                        Authorization: `Bearer ${Token}`,
                        'Content-type': 'application/json; charset=UFT-8',
                    }
                })
                const responseData = await fetchedData.json()
                console.log(responseData)

            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [UserName, Token])
    return {data, isLoading, isError}
}

export default RequestAPIAuth