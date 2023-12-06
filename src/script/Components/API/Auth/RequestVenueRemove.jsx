function RequestVenueRemove (accessToken, id) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        async function getData(){
            try {
                setIsLoading(true);
                setIsError(false)

                const fetchedData = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`, 
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-type': 'application/json; charset=UFT-8',
                    }
                })
                const responseData = await fetchedData.json()
                console.log(responseData)
            } catch (error) {
                console.log(error)
            }
        }
    })


}

export default RequestVenueRemove 