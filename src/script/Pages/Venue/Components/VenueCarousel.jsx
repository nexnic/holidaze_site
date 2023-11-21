function VenueCarousel({media}) {



    return (
        <div className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src='https://source.unsplash.com/random/150x150?person' alt="" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://source.unsplash.com/random/150x150?person" alt="" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://source.unsplash.com/random/150x150?person" alt="" />
                </div>
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