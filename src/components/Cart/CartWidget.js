import React from 'react'
import { CartContext } from "./CartContext"
import { useContext } from 'react'

const CartWidget = () => {
    const { carrito } = useContext(CartContext)
    if (carrito.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
            </>
        )
    }
    return (
        <div>
            <h3 className="text-center">
                Carrito de compras:
            </h3>
        </div>
    )
}

export default CartWidget