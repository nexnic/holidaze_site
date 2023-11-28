function VenueMainInfo({Title, Location, Updated, Description, Rating, Price}) {
    
    const City = Location?.city
    const Country = Location?.country
    const maxRating = 5;
    const activeRating = Rating

    
    
    
    return (
        <div className="row" >   
            <small className="text-white">{dateNow}</small>
            <h2 className="text-white">{Title}</h2>
            <small>{Country} / {City}</small>
            <div className="">
            {
                    [...new Array(maxRating)].map((arr , index)=> {
                        return index < activeRating ? <i className="fa-star fa-solid" style={{color: '#DF4C73'}}></i> : <i className="fa-star fa-solid" style={{color: '#B3B3B3'}}></i>
            })}
            </div>
            <p>
                {Description}
            </p>
            <div>
                <small>Per Day</small>
                <h3>{Price} kr</h3>
            </div>
        </div>
    )

}

export default VenueMainInfo