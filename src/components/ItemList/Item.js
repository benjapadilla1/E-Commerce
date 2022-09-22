import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ props }) => {
    return (
        <div className='Card'>
            <h4 className='card-tilte'>{props.title}</h4>
            <img src={props.image} className="foto" alt='Item' />
            <Link to={`/Item/${props.id}`} >
                <button className="btn btn-dark">
                    Ver detalles del producto
                </button>
            </Link>
        </div>
    )
}

export default Item