import foto from "../../assets/necy.png"
import fotocarrito from "../../assets/carrito.png"
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
            <NavLink to={"/cart"}>
                <img className="carrito" src={fotocarrito} alt="" />
                <svg className="circulo">
                    <circle />
                </svg>
            </NavLink>
        </div >
    )
}
export default NavBar;