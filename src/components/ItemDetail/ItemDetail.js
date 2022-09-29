import React, { useState } from 'react'
import Cuenta from "../ItemCount"
import { Link } from 'react-router-dom'
import { useCartContext } from '../Cart/CartContext'
const ItemDetail = ({ details }) => {
    const [cuenta, setCuenta] = useState(false)
    const { agregarAlCarrito } = useCartContext()
    const onAdd = (cantidad) => {
        setCuenta(true)
        agregarAlCarrito(details, cantidad)
        console.log(`Añadiste ${cantidad} cantidades al carrito`)
    }
    return (
        <>
            <div className='card'>
                <h4 className='card-tilte' >{details.title}</h4>
                <img src={details.image} className="foto" alt='Item' />
                <p>Precio: ${details.price}</p>
                <p>Medidas: {details.medidas}</p>
                {
                    cuenta
                        ? <Link to="/cart">Terminar compra</Link>
                        : <Cuenta initial={3} stock={5} onAdd={onAdd} />
                }
            </div>
            <Link to={`/`} >
                <button className="btn btn-dark">
                    Volver
                </button>
            </Link>
        </>
    )
}
export default ItemDetail