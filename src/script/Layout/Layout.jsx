import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout () {
    return (
        <>
            <Navigation />
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout