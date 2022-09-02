import React from 'react'

const ItemListContainer = (nombre) => {
    nombre = prompt("por favor ingrese su nombre")
    return (
        <div className='nombreprompt'>
            Buenos dias {nombre}
        </div>
    )
}

export default ItemListContainer