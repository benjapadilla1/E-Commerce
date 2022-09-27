import React, { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"
const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([])
    const limpiarCarrito = () => setCarrito([])
    const precioTotal = () => {
        return carrito.reduce((previo, actual) => previo + actual.cantidad * actual.price, 0)
    }
    const productosTotales = () => {
        return carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)
    }
    const itemCarrito = (id) => carrito.find(producto => producto.id === id) ? true : false

    const eliminarProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

    const agregarAlCarrito = (item, nuevaCantidad) => {
        const nuevoCarrito = carrito.filter(prod => prod.id !== item.id)
        nuevoCarrito.push({ ...item, cantidad: nuevaCantidad })
        setCarrito(nuevoCarrito)
    }
    console.log(carrito)
    return (
        <CartContext.Provider value={{ carrito, limpiarCarrito, eliminarProducto, itemCarrito, agregarAlCarrito, precioTotal, productosTotales }}>
            {children}
        </CartContext.Provider>
    )
}