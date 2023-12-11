import { useNavigate, useParams} from 'react-router-dom';
import GetLocal from '../../Storage/GetLocal';
import RequestAPIAuth from '../../Components/API/Auth/RequestAPIAuth';
import ChangeAvatarForm from '../../Components/Form/ChangeAvatarForm';
import { useState } from 'react';
import { format, differenceInDays } from 'date-fns'
import ModelBox from '../../Components/Reuse/ModelBox';
import RemovingBookingForm from '../../Components/Form/RemovingBookingForm';


function Profile (){
    const {userID} = useParams()
    const UserData = GetLocal('userData')
    const {accessToken} = UserData
    const [showInput, setShowInput] = useState(false)
    const [showBooking, setShowBooking] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [bookingID, setBookingID] = useState()
    const handleClose = () => setModalShow(false);
    const handleMenu = () => setShowInput(!showInput)
    const {data, isLoading, isError} = RequestAPIAuth(userID, accessToken)
    const navigate = useNavigate()
    function handlerVenueClick() {
        navigate('/dashboard')
    }

    function handlerClickBooking () {
        setShowBooking(!showBooking)
    }

    function handlerRemoveBooking (id) {
        setBookingID(id)
        setModalShow(true)
    }


    if(isLoading) return<div>loading</div>
    if(isError) return <div>Error</div>
    else {
        const {name, avatar, email, venueManager, _count, bookings, id} = data
        const ProfileImage = avatar ? avatar : 'https://source.unsplash.com/random/150x150?person'
        
        const today = new Date();


        return (
            <main className='container'>
                <div className="d-flex justify-content-center p-3">
                    <div className='w-75'>
                        <div className="d-flex justify-content-center mb-4">
                            <img id="selectedAvatar" src={ProfileImage}
                            className="rounded-circle" style={{width: '200px', height: '200px', }} alt={`See image of ${name}` }/>
                        </div>
                        <div className="text-center p-3">
                            {venueManager ? <p style={{color: 'white'}}>Venue manager</p> : null}
                            <h2 style={{color: 'white'}}>{name}</h2>
                            <h4 style={{color: 'white'}}>{email}</h4>
                        </div>
                        <div className='pb-3'>
                        {showInput ? <ChangeAvatarForm /> : null}
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={handleMenu}>{showInput ? 'close' : 'Change image'}</button>
                        </div>
                        </div>
                        <div className=''>
                            <ol className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-start"style={{color: 'white'}} onClick={handlerVenueClick}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Your Venue</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">{_count.venues}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start" style={{color: 'white'}} onClick={handlerClickBooking}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Your bookings</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">{_count.bookings}</span>
                                </li>
                            </ol>
                            <ul className={showBooking ? 'list-group' : 'd-none'}>
                                {
                                    bookings.map((booking) =>{
                                        const {venue, id, dateFrom , dateTo} = booking
                                        const {name, price} = venue
                                        const totalDays = differenceInDays(new Date(dateFrom), new Date(dateTo))

                                        return (
                                            <li className='list-group-item' key={id}>
                                                <div className='d-flex justify-content-between align-items-start mb-2'>
                                                    <div className="ms-2 me-auto text-white">{name}</div>
                                                    <button className='btn btn-primary badge rounded-pill' onClick={() => handlerRemoveBooking(id)}>Remove</button>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-start'>
                                                    <p className="ms-2 me-auto text-white">From {format(new Date(dateFrom), 'dd/MM/yyyy')}</p>
                                                    <p className='ms-2 me-auto text-white'>To {format(new Date(dateTo), 'dd/MM/yyyy')}</p>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-start'>
                                                        <div className="ms-2 me-auto text-white">Per Day {price},-</div>
                                                        <p className="ms-2 me-auto text-white">Days {totalDays + 2}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <ModelBox
                    IsActive={modalShow}
                    Title='Cancelling Booking'
                    Onhide={handleClose}
                >
                    <RemovingBookingForm ID={bookingID} />
                </ModelBox>
            </main>
        )
    }
}

export default Profile



/**
 * <li className='list-group-item d-flex justify-content-between align-items-start' key={id}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">Your Venue</div>
            </div>
        </li>
 */