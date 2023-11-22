/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";



function VenueCard({ item }) {
    const {id} = item
    const maxRating = 5;
    const activeRating = item.rating

    const navigate = useNavigate();
    function HandlerVenueCard(id){
        navigate(`/venue/${id}`)
    }

   return (
    <div className="card card__venue bg-dark text-white" id={item.id} onClick={() => HandlerVenueCard(id)}>
        <img src={item.media[0]} alt="" className="card-img"/>
        <div className="position-absolute bottom-0 text-light w-100 p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <h5 className="card-title">{item.name}</h5>
            <div>
            {
                    [...new Array(maxRating)].map((arr , index)=> {
                        return index < activeRating ? <i className="fa-star fa-solid" key={index} style={{color: '#DF4C73'}}></i> : <i className="fa-star fa-solid" key={index} style={{color: '#B3B3B3'}}></i>
            })}
            </div>
            
            <p>Per Day</p>
            <h6 className="card-title">{item.price} KR</h6>
        </div>
    </div>    
   )
}

export default VenueCard