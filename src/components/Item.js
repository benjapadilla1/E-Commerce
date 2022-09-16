import React from 'react'
import Cuenta from "./ItemCount"


const Item = (props) => {
    return (
        <div className='Card'>
            <h4>{props.title}</h4>
            <img src={props.image} className="foto" alt='Item' />
            <p>Precio: ${props.price}</p>
            <button className='btn btn-secondary'>Detalles del producto</button>
            <Cuenta />
        </div>
    )
}

export default Item