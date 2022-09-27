import React from 'react'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
const Cart = () => {
    const { carrito, precioTotal, limpiarCarrito } = useCartContext()
    if (carrito.length === 0) {
        return (
            <>
                <p>"No hay elementos en el carrito"</p>
                < Link to="/" > Hacer compras</Link>
            </>
        )
    }
    return (
        <>
            {
                carrito.map(producto => <ItemCart key={producto.id} producto={producto} cantidad={producto.cantidad} />)
            }
            <div className='d-flex justify-content-end'>
                <button onClick={limpiarCarrito} className="btn btn-danger" >Limpiar Carrito</button>
            </div>
            <h4 className='text-center'>
                Total de la compra: ${precioTotal()}
            </h4>
        </>
    )
}

export default Cart