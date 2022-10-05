import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { collection, getDocs } from "firebase/firestore"
import { recuperarItem } from '../../app/firebase/api';

const ItemListContainer = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        const recuperarCollection = collection(recuperarItem, "productos")
        getDocs(recuperarCollection)
            .then(res => setItem(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
    }, []);
    return (
        <><ItemList items={items} /></>
    )
}
export default ItemListContainer