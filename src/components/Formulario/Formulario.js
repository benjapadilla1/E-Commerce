import React from 'react'
import { useCartContext } from '../Cart/CartContext'
import "./Formulario.css"
import { useState } from 'react'
import { recuperarItem } from '../../app/firebase/api'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'

const Formulario = () => {
    const { carrito, precioTotal, limpiarCarrito } = useCartContext()
    const [userName, setUserName] = useState()
    const [email, setUserEmail] = useState()
    const [email2, setUserEmail2] = useState()
    const [userPhone, setUserPhone] = useState()
    const orden = {
        buyer: {
            name: userName,
            email: email,
            email2: email2,
            phone: userPhone
        },
        items: carrito.map(prod => ({ id: prod.id, title: prod.title, price: prod.price, cantidad: prod.cantidad })),
        Date: new Date(),
        total: precioTotal(),
    }
    const terminarCompra = () => {
        const collectionCompra = collection(recuperarItem, "clientes")
        addDoc(collectionCompra, orden)
            .then(({ id }) => alert(`Su id de su compra es: ${id}, le hemos enviado el resumen de su compra a el mail: ${email} con el total de la compra de $${precioTotal()} `))
        limpiarCarrito()
    }
    return (
        <div className="formulario">
            <form className="form-horizontal" method="post">
                <fieldset >
                    <legend className="text-center headerForm">¡Déjanos tus datos!</legend>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="text" onChange={e => setUserName(e.target.value)} placeholder="Nombre" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="email" onChange={e => setUserEmail(e.target.value)} placeholder="Email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="text" onChange={e => setUserEmail2(e.target.value)} placeholder="Repetir Email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-5">
                            <input type="text" onChange={e => setUserPhone(e.target.value)} placeholder="Número de teléfono" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 text-center">
                            <Link to={"/"}>
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