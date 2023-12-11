import { useParams } from "react-router-dom"
import Request from "../../Components/API/Request"
import LoadingScreen from "../../Components/Loading/LoadingScreen"
import ErrorMSG from "../../Components/Error/ErrorMSG"
import { Children, useState } from "react"
import VenueBooking from "./Components/VenueBooking"
import Button from 'react-bootstrap/Button';
import ModelBox from "../../Components/Reuse/ModelBox"
import GetLocal from "../../Storage/GetLocal"

import DefaultImage from '../../../assets/Image/No_image_available.svg.png'

const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
};

function Venue () {
    const {Venueid} = useParams()
    const userLogin = GetLocal('userData') 
    const {data, isLoading, isError} = Request('venues' , Venueid, '_bookings=true')
    const {media, id,  updated, name, rating, description, price, bookings, maxGuests} = data
    const [selectImage, setSelectImage] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const dateNow = new Date(updated).toLocaleDateString('no-NO', options)
    const maxRating = 5;
    const activeRating = rating
    

    const handleClose = () => setModalShow(false);


    if(isLoading) return <LoadingScreen />
    if(isError) return <ErrorMSG />
    else {
        return (
            <main>
                <div className='container mb-3'>
                    <div className='carousel slide'>
                        <div className="carousel-inner">
                            {
                                media?.map((items, k) => (
                                    <div className={`carousel-item ${selectImage === k ? 'active': ''}`} key={k} >
                                        <img src={items ? items : DefaultImage} key={k} alt='Image of the place' className="d-block h-50"/>
                                    </div>
                                ))
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" onClick={() => setSelectImage(selectImage - 1)}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" onClick={() => setSelectImage(selectImage + 1)}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='row text-white'>
                            <small>Last update {dateNow}</small>
                            <h2>{name}</h2>
                            <div className="">
                                {
                                    [...new Array(maxRating)].map((arr , index)=> {
                                    return index < activeRating ? <i className="fa-star fa-solid" style={{color: '#DF4C73'}} key={index}></i> : <i className="fa-star fa-solid" style={{color: '#B3B3B3'}} key={index}></i>
                                    })
                                }
                            </div>
                            <p>
                                {description}
                            </p>
                            <div>
                                <small>Per Day</small>
                                <h3>{price} kr</h3>
                                { userLogin ? 
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Rent
                                    </Button>
                                    : null
                                }

                                <ModelBox
                                    IsActive={modalShow}
                                    Title='Booking'
                                    Onhide={handleClose}
                                >
                                    <VenueBooking  Bookings={bookings} VenueID={id} MaxGuest={maxGuests} Price={price} handleClose={()=> handleClose()}/>
                                </ModelBox>
                            </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Venue