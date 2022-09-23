import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from "../../Productos"
import { CartContext } from '../Cart/CartContext';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    // const [details, setDetails] = useState({});
    const [details, setDetails] = useContext(CartContext);
    const { itemId } = useParams();
    useEffect(() => {
        const getDetails = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });
        getDetails.then(res => setDetails(res.find(productos => Number(productos.id) === Number(itemId))));
    }, [itemId]);
    return (
        <div>
            <ItemDetail details={details} />
        </div>
    )
}
export default ItemDetailContainer