import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import CartWidget from '../components/CartWidget';
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route element={<Layout />}>
                        <Route path="/" index element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:Id" element={<ItemDetailContainer />} />
                        <Route path="/cart/" element={<CartWidget />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router