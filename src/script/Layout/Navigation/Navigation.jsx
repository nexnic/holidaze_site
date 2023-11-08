
import IsLogin from "../../Components/Auth/IsLogin";
import TempletbrandName from "./Components/TempletBrandName";
import TempletHamburgerMenu from "./Components/TempletHamburgerMenu";
import TempletMain from "./Components/TempletMain";
import TempletProfileMenu from "./Components/TempletProfileMenu";

function Navigation () {
    const UserLogin = IsLogin()
    
     
    return (
        <TempletMain>
            <TempletbrandName />
            {UserLogin ? <TempletProfileMenu/> : null }
            <TempletHamburgerMenu/>
        </TempletMain>
    )
}

export default Navigation
