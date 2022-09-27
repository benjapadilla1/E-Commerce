import React, { useState } from 'react'
import Cuenta from "../ItemCount"
import { Link } from 'react-router-dom'
import { useCartContext } from '../Cart/CartContext'
const ItemDetail = ({ details }) => {
    const [cuenta, setCuenta] = useState(false)
    const { agregarAlCarrito } = useCartContext()
    const onAdd = (q) => {
        setCuenta(true)
        agregarAlCarrito(details, q)
        console.log(`Añadiste ${q} cantidades al carrito`)
    }
    return (
        <>
            <div className='Card'>
                <h4 className='card-tilte' >{details.title}</h4>
                <img src={details.image} className="foto" alt='Item' />
                <p>Precio: ${details.price}</p>
                <p>Medidas: {details.medidas}</p>
                {
                    cuenta
                        ? <Link to="/cart">Terminar compra</Link>
                        : <Cuenta stock={5} onAdd={onAdd} />
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