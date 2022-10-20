import React from 'react'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
const Cart = () => {
    const { carrito, precioTotal, limpiarCarrito } = useCartContext()
    if (carrito.length === 0) {
        return (
            <div className="text-center">
                <p>"No hay elementos en el carrito"</p>
                < Link to="/productos" > Hacer compras</Link>
            </div>
        )
    }
    return (
        <>
            {
                carrito.map(producto => <ItemCart key={producto.id} producto={producto} cantidad={producto.cantidad} />)
            }
            <h4 className='text-center'>
                Total de la compra: ${precioTotal()}
            </h4>
            <div className='d-flex justify-content-center'>
                <Link to={"/Formulario"}>
                    <button className='btn btn-info'>Terminar compra</button>
                </Link>
                <button onClick={limpiarCarrito} className="btn btn-warning" >Limpiar Carrito</button>
            </div>
        </>
    )
}

export default Cart