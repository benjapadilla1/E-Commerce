import React from 'react'
import { useCartContext } from '../Cart/CartContext'
import "./Formulario.css"
import { useState } from 'react'
import { createItem } from '../../app/firebase/api'
import { Link } from 'react-router-dom'
const Formulario = () => {
    const { carrito, precioTotal } = useCartContext()
    const [userName, setUserName] = useState()
    const [email, setUserEmail] = useState()
    const [userPhone, setUserPhone] = useState()
    const orden = {
        buyer: {
            name: userName,
            email: email,
            phone: userPhone
        },
        items: carrito.map(prod => ({ id: prod.id, title: prod.title, price: prod.price, cantidad: prod.cantidad })),
        Date: new Date(),
        total: precioTotal(),
    }
    const terminarCompra = () => {
        createItem({ orden })
    }
    return (
        <div className="formulario">
            <form className="form-horizontal" method="post">
                <fieldset >
                    <legend className="text-center headerForm">¡Déjanos tus datos!</legend>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="text" onChange={e => setUserName(e.target.value)} placeholder="Name" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="text" onChange={e => setUserEmail(e.target.value)} placeholder="Email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="text" onChange={e => setUserPhone(e.target.value)} placeholder="Phone" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 text-center">
                            <Link to={"/"}>
                                {/* <button onClick={() => { createItem({ name: userName, email: email, phone: userPhone }) }} 
                                className="btn btn-primary btn-lg">Cargar compra</button> */}
                                <button onClick={terminarCompra} className="btn btn-primary btn-lg">Cargar compra</button>
                            </Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div >
    )
}

export default Formulario