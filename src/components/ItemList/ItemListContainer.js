import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from "firebase/firestore"
import { recuperarItem } from '../../app/firebase/api';
import { Link, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
const ItemListContainer = () => {
    const [items, setItem] = useState([])
    const { categoriaId } = useParams()
    useEffect(() => {
        const recuperarCollection = collection(recuperarItem, "productos")
        if (categoriaId) {
            const collectionFilter = query(recuperarCollection, where("categoria", "==", categoriaId))
            getDocs(collectionFilter)
                .then(res => setItem(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        } else {
            getDocs(recuperarCollection)
                .then(res => setItem(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        }
    }, [categoriaId]);
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='btn btn-primary'>
                    Categorías
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item ><Link className='link' to="/productos/categoria/marroquinería ">Marroquinería</Link></Dropdown.Item>
                    <Dropdown.Item ><Link className='link' to="/productos/categoria/viaje">Viaje</Link></Dropdown.Item>
                    <Dropdown.Item ><Link className='link' to="/productos/categoria/textil">Textil</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <ItemList items={items} />
        </>
    )
}
export default ItemListContainer