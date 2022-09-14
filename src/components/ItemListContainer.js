import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import fotocartuchera1 from "../assets/cartucheraamayra.jpg"
import fotocartuchera2 from "../assets/cartucheraamayra2.jpg"
import set from "../assets/setvalijaamayra.jpg"
import valija from "../assets/valijaamayra.jpg"

const producto1 = {
    id: 1,
    title: "S",
    price: 5000,
    imagen: { fotocartuchera1 },
}
const producto2 = {
    id: 2,
    title: "S",
    price: 5000,
    imagen: { fotocartuchera2 },
}
const producto3 = {
    id: 3,
    title: "S",
    price: 5000,
    imagen: { set },
}
const producto4 = {
    id: 4,
    title: "S",
    price: 5000,
    imagen: { valija },
}
const ItemListContainer = () => {
    const [setProducto, productos] = useState([])
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    ItemListContainer.then(res => {
                        setProducto({ productos })
                    }))
            }, 2000);
            return (
                <>
                    <div>
                        <ItemList productos={productos} />
                    </div>
                </>
            )
        })
    }, [])
}

export default ItemListContainer