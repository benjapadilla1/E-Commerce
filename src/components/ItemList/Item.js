import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ props }) => {
    return (
        <div className="card">
            <h4 className='card-title'>{props.title}</h4>
            <Link to={`/Item/${props.id}`} >
                <img src={props.image} className="cardImg" alt='Item' style={{ width: "300px" }} />
                <div />
                <button className="btn btn-dark botonDetalles">
                    Ver detalles del producto
                </button>
            </Link>
        </div>
    )
}

export default Item