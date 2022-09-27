import React from 'react'
import { useCartContext } from './CartContext'


const CartWidget = () => {
    const { productosTotales } = useCartContext()
    return (
        <>
            <span> {productosTotales()}</span>
        </>
    )
}

export default CartWidget