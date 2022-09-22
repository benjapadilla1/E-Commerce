import foto from "../../assets/necy.png"
import CartWidget from "../CartWidget"
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div className="NavBar">
            <img className="necy" src={foto} alt="" />
            <ul>
            </ul>
            <li>
                <NavLink to="/Contacto">Contacto</NavLink>
            </li>
            <NavLink to="/" className="link"><h1>Necy</h1></NavLink>
            <ul>
                <li>
                    <NavLink to="/ubicacion" >Donde estamos </NavLink>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}
export default NavBar;