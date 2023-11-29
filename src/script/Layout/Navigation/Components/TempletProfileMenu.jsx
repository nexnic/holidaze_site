import { useNavigate } from "react-router-dom"
import Button from "../../../Components/Reuse/Button"

function TempletProfileMenu () {
    const UserDetails = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()
    const {name, avatar} = UserDetails
    const ProfileImage = avatar ? avatar : 'https://source.unsplash.com/random/150x150?person'

    function HandlerProfileButton () {
        navigate(`/profile/${name}`)
    }
    
    function HandlerLogoutButton () {
        navigate('/')
        window.localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='dropdown'>
            <div className='rounded-circle' role="button" id='ProfileDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                <img src={ProfileImage} alt="" className='rounded-circle' style={{width: '20px', height:'20px'}}/>
            </div>
            <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='ProfileDropdown'>
                <li>
                    <Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={HandlerProfileButton}>Profile</Button>
                </li>
                <li>
                    <Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={()=> HandlerLogoutButton()}>Logout</Button>
                </li>
            </ul>
        </div>
    )
    
}

export default TempletProfileMenu