
import { useState } from "react";
import IsLogin from "../../Components/Auth/IsLogin";
import TempletbrandName from "./Components/TempletBrandName";
import TempletHamburgerMenu from "./Components/TempletHamburgerMenu";
import TempletMain from "./Components/TempletMain";
import TempletProfileMenu from "./Components/TempletProfileMenu";
import LoginForm from "../../Components/Form/LoginForm";

function Navigation () {
    const [loginMenu, setLoginMenu] = useState(false)
    const UserLogin = IsLogin()

    function HandlerLoginMenu () {
        setLoginMenu(loginMenu => !loginMenu)
    }
        
    
    
     
    return (
        <TempletMain>
            <TempletbrandName />
            {UserLogin ? <TempletProfileMenu/> : null }
            <TempletHamburgerMenu HandlerLogin={HandlerLoginMenu}/>
            {loginMenu ? <LoginForm/> : null }
        </TempletMain>
    )
}

export default Navigation
