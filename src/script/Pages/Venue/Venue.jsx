import { useParams } from "react-router-dom"
import Request from "../../Components/API/Request"
import LoadingScreen from "../../Components/Loading/LoadingScreen"
import ErrorMSG from "../../Components/Error/ErrorMSG"
import VenueCarousel from "./Components/VenueCarousel"
import VenueMainInfo from "./Components/VenueInfo"

function Venue () {
    const {id} = useParams()
    
    const {data, isLoading, isError} = Request('venues' , id, '_bookings=true')
    console.log(data)
    if(isLoading) return <LoadingScreen />
    if(isError) return <ErrorMSG />
    else {
        return (
            <main>
                <VenueCarousel media={data.media} />
                <VenueMainInfo Title={data.name} Location={data.location} Updated={data.updated} Rating={data.rating} Description={data.description} Price={data.price} key={data.id}/>
            </main>
        )
    }
}

export default Venue