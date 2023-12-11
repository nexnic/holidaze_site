import { Link } from "react-router-dom"
import ChangeMetaTag from "../../Components/Meta/ChangeMeta"
import GetLocal from "../../Storage/GetLocal"
import SearchBox from "../../Components/Search/search"
import imageBG from '../../../assets/Image/holidaze-bg-1.jpg'

function Home () {
    const isLogin =  GetLocal('userData') ? true : false
    const MetaData = {
        Title: 'Holidaze | Home', 
        description: 'Discover the perfect holiday venue for your festive celebrations at Holidaze Venues. Explore enchanting spaces tailored for holiday parties, gatherings, and events. Immerse yourself in a world of seasonal charm and joy. Book your ideal holiday venue today and create unforgettable memories with Holidaze Venues.', 
        keywords: 'venue, Booking, organizers'
    }

    ChangeMetaTag(MetaData)

    return (
        <>
            <header 
                className="d-flex  align-items-center justify-content-center"
                style={{backgroundImage: `URL(${imageBG})`, backgroundPosition:'bottom', backgroundSize:'cover', height:'250px',}}>
                <div className="w-75">
                    <SearchBox />
                </div>
            </header>
            <main className="d-flex justify-content-center p-3">
            <div className="w-75 text-white" >
                <div className="mb-3">
                    <h2>
                        Welcome to Holidaze Venue
                        
                    </h2>
                    <h5>
                        Your Premier Destination for Holiday Rentals!
                    </h5>
                </div>
                <div className="mb-3">
                    <p>Escape to a world of enchanting holiday experiences with Holidaze Venue. Browse through our curated selection of stunning vacation rentals, from cozy cabins to luxurious beachfront villas. Find the ideal space that suits your preferences, ensuring each holiday is a memorable escape. Your dream holiday begins here!</p>
                    {isLogin ? '' : <Link to="/register" className="link-primary-custom">Register Now</Link>}
                </div>
                <div className="mb-3">
                    <h5>
                        Why Holidaze Venue 
                    </h5>
                    <ul className="row" style={{listStyle: 'none'}}>
                        <li className="col">
                            <p className="font-weight-bold">Diverse Selection</p>
                            <small>Explore a diverse range of holiday rentals tailored to your preferences.</small>
                        </li>
                        <li className="col">
                            <p className="font-weight-bold">Seamless Booking</p>
                            <small>Enjoy a hassle-free booking process, ensuring a smooth and secure transaction.</small>
                        </li>
                        <li className="w-100">
                        </li>
                        <li className="col">
                            <p className="font-weight-bold">Host with Confidence</p>
                            <small>Showcase your property to a global audience and let Holidaze Venue handle the details.</small>
                        </li>
                        <li className="col">
                            <p className="font-weight-bold">Personalized Experiences</p>
                            <small>Whether youre seeking or hosting, were committed to creating personalized and memorable experiences.</small>
                        </li>
                    </ul>
                    <Link to="/product" className="btn btn-primary">See Rent</Link>
                </div>
                <section>

                </section>
            </div>
        </main>
        
        </>
        
    )
}

export default Home