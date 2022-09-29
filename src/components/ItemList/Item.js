import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ props }) => {
    return (
        <div className="card">
            <h4 className='card-title'>{props.title}</h4>
            <img src={props.image} className="card-img-top" alt='Item' style={{ width: "300px" }} />
            <Link to={`/Item/${props.id}`} >
                <button className="btn btn-dark">
                    Ver detalles del producto
                </button>
            </Link>
        </div>
    )
}

export default Item