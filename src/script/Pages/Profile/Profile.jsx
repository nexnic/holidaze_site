import { useParams} from 'react-router-dom';
import GetLocal from '../../Storage/GetLocal';
import RequestAPIAuth from '../../Components/API/Auth/RequestAPIAuth';
import ProfileImage from './Components/ProfileImage';
import ProfileUserInfo from './Components/ProfileUserInfo';
import ChangeAvatarForm from '../../Components/Form/ChangeAvatarForm';
import { useState } from 'react';


function Profile (){
    const {userID} = useParams()
    const UserData = GetLocal('userData')
    const {accessToken} = UserData
    const [showInput, setShowInput] = useState(false)
    const handleMenu = () => setShowInput(!showInput)
    const {data, isLoading, isError} = RequestAPIAuth(userID, accessToken)
    if(isLoading) return<div>loading</div>
    if(isError) return <div>Error</div>
    else {
        const {name, avatar, email, venueManager, _count} = data
        const ProfileImage = avatar ? avatar : 'https://source.unsplash.com/random/150x150?person'

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
                                <li className="list-group-item d-flex justify-content-between align-items-start" style={{color: 'white'}}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Your Venue</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">{_count.venues}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start" style={{color: 'white'}}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Your bookings</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">{_count.bookings}</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Profile

/**
 * 
 * 
 * 
 */