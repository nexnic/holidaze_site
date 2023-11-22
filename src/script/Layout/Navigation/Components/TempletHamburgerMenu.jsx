
import IsLogin from '../../../Components/Auth/IsLogin';
import Button from '../../../Components/Reuse/Button'
import { Link } from "react-router-dom";


function TempletHamburgerMenu ({HandlerLogin}) {
    const UserLogin = IsLogin()

    return (
        <>
        <Button ClassOf={'navbar-toggler'} TypeOf={'button'}  DBToggel={'collapse'} DBTarget={'#navBarMenu'} AControls={'navBarMenu'} AExpanded={'false'} ALabel={'Toggle navigation'}>
            <span className="navbar-toggler-icon"></span>
        </Button>
        <div className='collapse navbar-collapse' id='navBarMenu'>
            <ul className='nav-bar mr-auto'>
                <li className='nav-item'>
                    <Link to='/' className='link-unstyled text-white'>Home</Link>
                </li>
                <li className='nav-item'>
                    {
                        UserLogin ? null : <Link to='/register' className='link-unstyled text-white'>Register User</Link>
                    }
                </li>
                <li>
                    <Link to='/product' className='link-unstyled text-white'>Rent</Link>
                </li>
                <li>
                    <Button ClassOf='link-unstyle' TypeOf='button' OnClick={HandlerLogin}>Login</Button>
                </li>
            </ul>
        </div>
        </>
       
    )
}

export default TempletHamburgerMenu