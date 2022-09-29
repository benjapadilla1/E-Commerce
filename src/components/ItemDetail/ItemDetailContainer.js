import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore"
const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
    const { itemId } = useParams();
    useEffect(() => {
        // pedido para recuperar Item
        const recuperarItem = getFirestore()
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