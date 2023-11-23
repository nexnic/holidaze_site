import { useNavigate } from "react-router-dom"
import Button from "../../../Components/Reuse/Button"

function TempletProfileMenu () {
    const UserDetails = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()
    const {name} = UserDetails

    function HandlerProfileButton () {
        navigate(`/profile/${name}`)
    }
    function HandlerLogoutButton () {
        console.log()
    }

    return (
        <div className='dropdown'>
            <div className='rounded-circle' role="button" id='ProfileDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                <img src="" alt="" className='rounded-circle' style={{width: '20px', height:'20px'}}/>
            </div>
            <ul className='dropdown-menu' aria-labelledby='ProfileDropdown'>
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