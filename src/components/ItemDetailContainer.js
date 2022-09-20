import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productos from "../Productos"
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const [details, setDetails] = useState([])
    const { detalleId } = useParams()
    useEffect(() => {
        const getItem = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Productos);
            },)
        });
        getItem().then(res => setDetails(res.find(Productos => Productos.id === parseInt(detalleId))))
    }, [detalleId])
    return (
        <div><ItemDetail details={details} /></div>
    )
}
export default ItemDetailContainer