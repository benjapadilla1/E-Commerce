import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock = 5, cuentaInicial = 0, onAdd }) => {
    const [contador, setContador] = useState(cuentaInicial)
    if (contador > 5) {
        setContador(cuentaInicial)
    } else if (contador < 0) {
        setContador(cuentaInicial)
    }

    return (
        <div class="botones">
            Stock: {stock}
            <button onClick={() => setContador(cuentaInicial)} >Resetear</button>
            <button onClick={() => setContador(contador - 1)} > - </button>
            {contador}
            <button onClick={() => setContador(contador + 1)}> + </button>
            <button onClick={() => onAdd(contador)} >Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount