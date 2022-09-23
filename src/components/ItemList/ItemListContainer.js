import React from 'react'
import { useState, useEffect } from 'react';
import productos from "../../Productos"
import ItemList from './ItemList';
const ItemListContainer = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });
        task.then((res) => {
            setItem(res)
        });
    }, []);
    return (
        <><ItemList props={items} /></>
    )
}
export default ItemListContainer