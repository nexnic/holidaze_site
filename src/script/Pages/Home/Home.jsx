import ChangeMetaTag from "../../Components/Meta/ChangeMeta"

function Home () {

    const MetaData = {
        Title: 'Holidaze | Home', 
        description: 'test', 
        keywords: ''
    }

    ChangeMetaTag(MetaData)

    return (
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
                </div>
                <div className="mb-3">
                    <h5>
                        Why Holidaze Venue 
                    </h5>
                    <ul className="row">
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
                            <small>Whether you're seeking or hosting, we're committed to creating personalized and memorable experiences.</small>
                        </li>
                    </ul>
                </div>
                <section>

                </section>
            </div>
        </main>
    )
}

export default Home