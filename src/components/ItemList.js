import React, { useEffect, useState } from 'react'
import Item from "./Item"

const ItemList = ({ productos }) => {
    <>{
        productos.map((p) => {
            <Item key={p.id} productos={p} />
        })
    }
    </>
}

export default ItemList

