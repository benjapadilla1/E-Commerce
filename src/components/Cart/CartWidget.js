import React from 'react'
import { useCartContext } from './CartContext'

const CartWidget = () => {
    const { carrito, eliminarProducto, limpiarCarrito } = useCartContext()
    return (
        <>
            {carrito.length > 0
                ? carrito.map(item =>
                    <div>
                        <h2 className='text-center'>{item.title} </h2>
                        <img src={item.image} className="foto" />
                        <button onClick={eliminarProducto} className='btn btn-danger'>Eliminar Producto </button>
                        <button onClick={limpiarCarrito} className="btn btn-danger">Limpiar Carrito</button>
                    </div>
                )
                : "No hay productos en el carrito"
            }
        </>
    )
}

export default CartWidget