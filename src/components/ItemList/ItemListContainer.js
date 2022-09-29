import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs } from "firebase/firestore"
const ItemListContainer = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        const recuperarItem = getFirestore()
        const recuperarCollection = collection(recuperarItem, "productos")
        getDocs(recuperarCollection)
            .then(res => setItem(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
    }, []);
    return (
        <><ItemList items={items} /></>
    )
}
export default ItemListContainer