import React from 'react'
import Cuenta from "./ItemCount"
import { Link } from 'react-router-dom'

const ItemDetail = ({ details }) => {
    return (
        <>
            <div className='Card'>
                <h4 className='card-tilte'>{details.title}</h4>
                <img src={details.image} className="foto" alt='Item' />
                <p>Precio: ${details.price}</p>
                <p>Medidas: {details.medidas}</p>
                <Cuenta />
            </div>
            <Link to={`/#`} >
                <button className="btn btn-dark">
                    Volver
                </button>
            </Link>
        </>
    )
}

export default ItemDetail