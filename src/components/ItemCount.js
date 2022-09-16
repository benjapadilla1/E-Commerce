import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock = 5, Inicial = 0, onAdd }) => {
    const [c, setC] = useState(Inicial)
    if (c > 5) {
        setC(Inicial)
    } else if (c < 0) {
        setC(Inicial)
    }
    return (
        <div>
            Stock: {stock}
            <button onClick={() => setC(Inicial)} className="btn btn-danger">Reset</button>
            <button onClick={() => setC(c - 1)} > - </button>
            {c}
            <button onClick={() => setC(c + 1)}> + </button>
            <button className="btn btn-success" onClick={() => onAdd(c)} >Agregar al Carrito</button>
        </div >
    )
}
export default ItemCount