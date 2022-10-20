import foto from "../../assets/necy.png"
import fotocarrito from "../../assets/carrito.png"
import { NavLink } from "react-router-dom"
import CartWidget from "../Cart/CartWidget"
import "./NavBar.css"
const NavBar = () => {
    return (
        <div className="NavBar">
            <NavLink to="/">
                <img className="necyFoto" src={foto} alt="" />
            </NavLink>
            <NavLink to="/productos" className="NavBarAnchor">Productos</NavLink>
            <NavLink to="/" className="Necyh1"><h1>Necy</h1></NavLink>
            <NavLink to="/ubicacion" className="NavBarAnchor">Donde estamos </NavLink>
            <NavLink to={"/cart"}>
                <img className="carritoFoto" src={fotocarrito} alt="" />
                <div className="contador">
                    <CartWidget />
                </div>
            </NavLink>
        </div >
    )
}
export default NavBar;