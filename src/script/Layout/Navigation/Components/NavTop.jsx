import Button from "../../../Components/Reuse/Button"
import GetLocal from "../../../Storage/GetLocal"
import { Link, useNavigate } from "react-router-dom"
import NavProfileMenu from "./NavProfile"
function NavTop() {
    const isLogin =  GetLocal('userData') ? true : false


    return (
        <nav className="navbar navbar-expand-lg bg-black navbar-darkbg-body-black">
            <div className="container-fluid justify-content-between">
                <div className="d-flex">
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
                {
                    isLogin ? <NavProfileMenu /> : 'faile'
                }
                <Button ClassOf={'navbar-toggler'} TypeOf={'button'}  DBToggel={'collapse'} DBTarget={'#navbarLinkmenu'} AControls={'navbarLinkmenu'} AExpanded={'false'} ALabel={'Toggle navigation'} >
                    <span style={{color: 'white'}} className="navbar-toggler-icon"></span>
                </Button>
            </div>
            
        </nav>
    )
}

export default NavTop