import { Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

function Layout () {
    return (
        <>
            <Navigation />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout