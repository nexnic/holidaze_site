import RequesteAPI from "../../Components/API/RequestAPI"
import ErrorMSG from "../../Components/Error/ErrorMSG"
import LoadingScreen from "../../Components/Loading/LoadingScreen"
import VenueCard from "../../Components/Venue/VenueCard"

function Product (){

    
    const {data, isLoading, isError} = RequesteAPI()

    if(isLoading) return <LoadingScreen/>
    if(isError) return <ErrorMSG />
    else {
       return (
        <main>
            <section className='d-flex p-2 flex-column align-items-center gap-3'>
                {
                    data.map((items) => <VenueCard item={items} key={items.id} />)
                }
            </section>
        </main>
       ) 
    }
}

export default Product 