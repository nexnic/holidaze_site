import { useState } from "react"
import ChangeAvatarForm from "../../../Components/Form/ChangeAvatarForm"

function ProfileImage ({avatar, userName}) {
    const [showInput, setShowInput] = useState(false)

    const handleMenu = () => setShowInput(!showInput)
    const ProfileImage = avatar ? avatar : 'https://source.unsplash.com/random/150x150?person'
    return (
        <div>
            <div className="d-flex justify-content-center mb-4">
                <img id="selectedAvatar" src={ProfileImage}
                className="rounded-circle" style={{width: '200px', height: '200px', }} alt={`See image of ${userName}` }/>
            </div>
            {showInput ? <ChangeAvatarForm /> : null}
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleMenu}>{showInput ? 'close' : 'Change image'}</button>
            </div>
        </div>
        
    )

}

export default ProfileImage