import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
const Layout = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout