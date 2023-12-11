import { useEffect ,useState } from "react"
import RequesteAPI from "../../Components/API/RequestAPI"
import ErrorMSG from "../../Components/Error/ErrorMSG"
import LoadingScreen from "../../Components/Loading/LoadingScreen"
import VenueCard from "../../Components/Venue/VenueCard"
import ChangeMetaTag from "../../Components/Meta/ChangeMeta"
import SearchBox from "../../Components/Search/search"
import RequestAPILim from "../../Components/API/RequestLimit"
import imageBG from '../../../assets/Image/holidaze-bg-1.jpg'
function Product (){

    const MetaData = {
        Title: 'Holidaze | Product', 
        description: 'Discover the perfect holiday venue for your festive celebrations at Holidaze Venues. Explore enchanting spaces tailored for holiday parties, gatherings, and events. Immerse yourself in a world of seasonal charm and joy. Book your ideal holiday venue today and create unforgettable memories with Holidaze Venues.', 
        keywords: 'venue, Booking, organizers'
    }
    ChangeMetaTag(MetaData)
    
    const [limit, setLimit] = useState(4);
    const [offset, setOffset] = useState(0);
    const {data, isLoading, isError} = RequestAPILim(limit, offset)

    const handlePagination = (newOffset) => {
        setOffset(newOffset);
    };


    if(isError) {
        return (
            <div></div>
        )
    }
    if(isLoading) {
        return (
            <LoadingScreen />
        )
    }
    else {
        return (
            <>
                <header 
                    className="d-flex  align-items-center justify-content-center"
                    style={{backgroundImage: `URL(${imageBG})`, backgroundPosition:'bottom', backgroundSize:'cover', height:'250px',}}>
                    <div className="w-75">
                        <SearchBox />
                    </div>
                </header>
                <main className="d-flex flex-column align-items-center  p-3 m-3">
    
                    <div className="mb-3">
                        <h1 style={{color: 'white'}}>Holidaze</h1>
                    </div>
                    
                    <div className="d-flex flex-wrap justify-content-center gap-3 p-3 mb-3" >
                        {
                        data.map((items) => <VenueCard item={items} key={items.id} />)
                        }
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-3 w-50">
                        <button className="btn btn-primary"  onClick={() => handlePagination(offset - limit)} disabled={offset === 0}>
                            Previous
                        </button>
                        <span style={{color: 'white'}}>{`Results ${offset + 1}-${offset + limit}`}</span>
                        <button className="btn btn-primary" onClick={() => handlePagination(offset + limit)}>Next</button>
                    </div>
                </main>
            </>
           )  
    }

}

export default Product 