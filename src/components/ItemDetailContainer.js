import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productos from "../Productos"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [details, setDetails] = useState([])
    useEffect(() => {
        getItem().then(res => setDetails(res.find((Productos) => Number(Productos.id) === Number(itemId))))
    }, [itemId])
    const getItem = () => new Promise((res, rej) => {
        setTimeout(() =>
            res(Productos),
            2000)
    });
    return (
        <div><ItemDetail details={details} /></div>
    )
}
export default ItemDetailContainer