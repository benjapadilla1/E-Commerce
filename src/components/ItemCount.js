import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
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
            <button onClick={() => setC(Inicial)} >Reset</button>
            <button onClick={() => setC(c - 1)} > - </button>
            {c}
            <button onClick={() => setC(c + 1)}> + </button>
            <Button onClick={() => onAdd(c)} >Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount