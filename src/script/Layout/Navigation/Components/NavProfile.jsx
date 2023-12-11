import GetLocal from "../../../Storage/GetLocal"
import Button from "../../../Components/Reuse/Button"
import {useNavigate } from "react-router-dom"



function NavProfileMenu () {
    const navigate = useNavigate()
    const {avatar, name ,venueManager} =GetLocal('userData')
    const ProfileImage = avatar ? avatar : 'https://source.unsplash.com/random/150x150?person'

    function HandlerProfileButton (name) {
        navigate(`/profile/${name}`)
    }
    function HandlerManagerButton () {
        navigate('/dashboard')
    }
    
    function HandlerLogoutButton () {
        navigate('/')
        window.localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="dropdown">
            <div className='rounded-circle nav-link  dropdown-toggle' role="button" id='ProfileDropdown' data-bs-toggle='dropdown' aria-expanded='false' aria-roledescription="button">
                <img src={ProfileImage} alt={`See image of `} className='rounded-circle' style={{width: '20px', height:'20px'}}/>
            </div>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="ProfileDropdown">
                <li >
                    <Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={()=> HandlerProfileButton(name)}>Profile</Button>
                </li>
                {
                    venueManager ? <li><Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={HandlerManagerButton}>Dashboard</Button></li> : null
                }
                <li>
                    <Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={()=> HandlerLogoutButton()}>Logout</Button>
                </li>
            </ul>
        </div>
    )
}

export default NavProfileMenu
