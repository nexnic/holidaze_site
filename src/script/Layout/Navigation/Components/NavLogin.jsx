import { Link, useNavigate } from "react-router-dom"
import GetLocal from "../../../Storage/GetLocal"
import Button from "../../../Components/Reuse/Button"


function NavLogin() {
    const {avatar, name, venueManager} = GetLocal('userData')

    const navigate = useNavigate()

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
        <>
            <nav className="navbar navbar-expand-lg bg-black navbar-darkbg-body-black">
            <div className="container-fluid justify-content-between">
                <div className="d-flex">

                    

                    <form className="input-group w-auto my-auto d-none d-sm-flex">
                        <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        style={{minWidth: '125px'}}
                        />
                        <span className="input-group-text border-0 d-none d-lg-flex"
                        ><i className="fas fa-search"></i
                        ></span>
                    </form>
                </div>
                <div className="dropdown">
                    <div className='rounded-circle nav-link  dropdown-toggle' role="button" id='ProfileDropdown' data-bs-toggle='dropdown' aria-expanded='false' aria-roledescription="button">
                        <img src={avatar} alt={`See image of `} className='rounded-circle' style={{width: '20px', height:'20px'}}/>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="ProfileDropdown">
                        <li >
                            <Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={HandlerProfileButton(name)}>Profile</Button>
                        </li>
                        {
                            venueManager ? <li><Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={HandlerManagerButton}>Dashboard</Button></li> : 'test'
                        }
                        <li>
                            <Button TypeOf={'button'} ClassOf={'dropdown-item'} OnClick={()=> HandlerLogoutButton()}>Logout</Button>
                        </li>
                    </ul>
                </div>
                <Button ClassOf={'navbar-toggler'} TypeOf={'button'}  DBToggel={'collapse'} DBTarget={'#navbarLinkmenu'} AControls={'navbarLinkmenu'} AExpanded={'false'} ALabel={'Toggle navigation'} >
                            <span style={{color: 'white'}} className="navbar-toggler-icon"></span>
                </Button>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-darkbg-body-black bg-black">
            <div className="container-fluid">
                <div className="collapse  navbar-collapse" id="navbarLinkmenu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/product' className='nav-link text-white'>Rent</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )

}

export default NavLogin

<li className="nav-item">
                            {venueManager ? null :<Link to='/register/venue' className='nav-link text-white'>Register As Venue</Link>}
</li>