import React from 'react'
import { useState } from 'react'
const ItemCount = ({ stock, Inicial = 0, onAdd }) => {
    const [cantidad, setCantidad] = useState(Inicial)
    if (cantidad > stock) {
        setCantidad(Inicial)
    }
    else if (cantidad < 0) {
        setCantidad(Inicial)
    }
    return (
        <div>
            Stock: {stock}
            <button onClick={() => setCantidad(Inicial)} className="btn btn-danger">Reset</button>
            <button onClick={() => setCantidad(cantidad - 1)} > - </button>
            {cantidad}
            <button onClick={() => setCantidad(cantidad + 1)}> + </button>
            <button className="btn btn-success" onClick={() => onAdd(cantidad)} >Agregar al Carrito</button>
        </div >
    )
}
export default ItemCount