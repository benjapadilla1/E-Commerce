import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ItemListContainer from '../components/ItemList/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import { CartProvider } from '../components/Cart/CartContext';
import Cart from '../components/Cart/Cart';
const Router = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Routes >
                        <Route element={<Layout />}>
                            <Route path="/" index element={<ItemListContainer />} />
                            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                            <Route path="/cart" element={<Cart />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    )
}

export default Router