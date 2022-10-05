import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore"
import { recuperarItem } from '../../app/firebase/api';
const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
    const { itemId } = useParams();
    useEffect(() => {
        // pedido para recuperar Item
        const recuperarDoc = doc(recuperarItem, "productos", itemId)
        getDoc(recuperarDoc)
            .then(res => setDetails({ id: res.id, ...res.data() }))
    }, [itemId]);
    return (
        <div>
            <ItemDetail details={details} />
        </div>
    )
}
export default ItemDetailContainer