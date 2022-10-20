import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ItemListContainer from '../../components/ItemList/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetail/ItemDetailContainer';
import { CartProvider } from '../../components/Cart/CartContext';
import Cart from '../../components/Cart/Cart';
import Ubicacion from '../../pages/ubicacion';
import Formulario from '../../components/Formulario/Formulario';
import Home from '../../pages/Home';
const Router = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Routes >
                        <Route element={<Layout />}>
                            <Route path="/" index element={<Home />} />
                            <Route path="/productos" element={<ItemListContainer />} />
                            <Route path="/productos/categoria/:categoriaId" element={<ItemListContainer />} />
                            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                            <Route path="/ubicacion" element={<Ubicacion />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path='/Formulario' element={<Formulario />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    )
}

export default Router