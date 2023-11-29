import { useState } from "react"
import ChangeAvatarForm from "../../../Components/Form/ChangeAvatarForm"

function ProfileImage ({avatar, userName}) {
    const [showInput, setShowInput] = useState(false)

    const handleMenu = () => setShowInput(!showInput)

    return (
        <div>
            <div className="d-flex justify-content-center mb-4">
                <img id="selectedAvatar" src="https://source.unsplash.com/random/150x150?person"
                className="rounded-circle" style={{width: '200px', height: '200px', }} alt="example placeholder"/>
            </div>
            {showInput ? <ChangeAvatarForm /> : null}
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleMenu}>{showInput ? 'close' : 'Change image'}</button>
            </div>
        </div>
        
    )

}

export default ProfileImage