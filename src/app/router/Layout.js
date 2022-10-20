import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/footer/footer"
const Layout = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Layout