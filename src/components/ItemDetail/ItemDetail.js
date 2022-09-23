import React from 'react'
import Cuenta from "../ItemCount"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from "../Cart/CartContext"
import { useContext } from 'react'
const ItemDetail = ({ details }) => {
    const { agregarAlCarrito } = useContext(CartContext)
    const [carrito, setCarrito] = useState(false)
    const onAdd = (q) => {
        setCarrito(true)
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
                    carrito
                        ? <Link to="/cart">Terminar compra</Link>
                        : <Cuenta stock={5} onAdd={onAdd} />
                }
            </div>
            <Link to={`/`} >
                <button className="btn btn-dark">
                    Volver
                </button>
            </Link>
            <button className="btn btn-dark" onClick={() => agregarAlCarrito(carrito)}>Agregar al Carrito</button>
        </>
    )
}
export default ItemDetail