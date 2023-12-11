import { Link} from "react-router-dom"
import { NavLink} from "react-router-dom";
import Button from "../../Components/Reuse/Button"
import GetLocal from "../../Storage/GetLocal"
import NavProfileMenu from "./Components/NavProfile"
import { useState } from "react";
import LoginForm from "../../Components/Form/LoginForm";
import SearchBox from "../../Components/Search/search";

function Navigation () {
    let userLogin = GetLocal('userData')
    const [openLoginMenu, setOpenLoginMenu] = useState(false)
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-darkbg-body-black bg-black">
                <div className="container-fluid justify-content-between">
                    
                        
                        <div className="d-flex align-items-center">
                            <Link to='/' className="navbar-brand me-2 mb-1 d-flex align-items-center">
                                <h2>
                                    <span style={{color:'white'}}>
                                        Holi
                                    </span>
                                    <span style={{color:'#FC7D14'}}>
                                        daze
                                    </span>
                                </h2>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            {userLogin ? <NavProfileMenu /> : '' }
                            {userLogin ? null :  <button type="button" className="btn btn-primary" onClick={() => setOpenLoginMenu(!openLoginMenu)}>Login</button>}
                            <Button ClassOf={'navbar-toggler'} TypeOf={'button'}  DBToggel={'collapse'} DBTarget={'#navbarLinkmenu'} AControls={'navbarLinkmenu'} AExpanded={'false'} ALabel={'Toggle navigation'} >
                                <span style={{color: 'white'}} className="navbar-toggler-icon"></span>
                            </Button>
                        </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-darkbg-body-black bg-black">
                <div className="container-fluid">
                    <div className="collapse  navbar-collapse" id="navbarLinkmenu">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    to="/" 
                                    className={({isActive}) => (isActive ? 'nav-link text-white' : 'nav-link text-white' )}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to='/product' className='nav-link text-white'>Rent</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {openLoginMenu ? <LoginForm /> : null}
            </nav>
        </>
        
    )




}

export default Navigation