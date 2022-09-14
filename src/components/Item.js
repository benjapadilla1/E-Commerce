import React from 'react'
import Cuenta from "./ItemCount"
import ItemListContainer from './ItemListContainer'
const Item = () => {
    return (
        <div className='padre-productos'>
            {productos.map((producto, i) =>
                <div key={i}  >
                    <div id={producto.id} >
                        <div>
                            <div>
                                <p> {producto.title}</p>
                            </div>
                            <div>
                                <img className='foto' src={producto.imagen} ></img>
                            </div>
                            <div>
                                <Cuenta />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item