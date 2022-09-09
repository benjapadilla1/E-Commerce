import React, { useEffect, useState } from 'react'
import InfoItem from './Item'
import ValijaSet from "../assets/setvalijaamayra.jpg"
import Cuenta from "./ItemCount"
const ItemList = () => {
    return (
        <div className="padre-productos">
            <img src={ValijaSet} class="fotovalija" />
            <h4>
                <InfoItem />
                <Cuenta />
            </h4>

            <div>
                <img src={ValijaSet} class="fotovalija" />
                <h4><InfoItem /></h4>
                <Cuenta />
            </div>
        </div >
    )
}




export default ItemList
