function VenueCarousel({Media}) {
    
    return (
        <div className="">
            
            <div className="carousel-inner">
                {
                    Media.map((items) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="carousel-item">
                            <img src={items} className="d-block w-100" alt="..."></img>
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default VenueCarousel