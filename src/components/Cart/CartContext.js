import React, { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
        setCarrito((prevState) => [...prevState, item])
    }
    console.log(carrito)
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    )
}