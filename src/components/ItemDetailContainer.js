import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from "../Productos"
import ItemDetail from './ItemDetail';
// const ItemDetailContainer = () => {
//     const { itemId } = useParams()
//     const [details, setDetails] = useState([])
//     useEffect(() => {
//         getItem().then(res => setDetails(res.find((Productos) => Number(Productos.id) === Number(itemId))))
//     }, [itemId])
//     const getItem = () => new Promise((res, rej) => {
//         setTimeout(() =>
//             res(Productos),
//             2000)
//     });
//     return (
//         <div><ItemDetail props={details} /></div>
//     )
// }

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
    const { itemId } = useParams();
    useEffect(() => {
        const getDetails = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });
        getDetails.then(res => setDetails(res.find(productos => productos.key === itemId)));
    }, [itemId]);
    return (
        <div>
            <ItemDetail props={details} />
        </div>
    )
}
export default ItemDetailContainer