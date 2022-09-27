import React from 'react'
import { useCartContext } from './CartContext'
const ItemCart = ({ producto }) => {
    const { eliminarProducto } = useCartContext()
    return (
        <>
            <h2 className='text-center'>{producto.title} </h2>
            <img src={producto.image} className="rounded mx-auto d-block" alt='' style={{ width: "400px" }} />
            <p>Cantidad: {producto.cantidad}</p>
            <p>Subtotal: ${producto.price * producto.cantidad} </p>
            <button onClick={() => eliminarProducto(producto.id)} className='btn btn-danger' >Eliminar Producto </button>
        </>
    )
}
export default ItemCart