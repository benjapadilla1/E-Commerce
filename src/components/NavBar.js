import foto from "../assets/necy.png"
import "../app/style.css"
import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={foto} alt="" />
            <ul>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>
            <h1>
                Necy
            </h1>
            <ul>
                <li>
                    <a href="#">Donde estamos</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}
export default NavBar;