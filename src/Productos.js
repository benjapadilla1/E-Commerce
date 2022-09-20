import fotocartuchera1 from "./assets/cartucheraamayra.jpg"
import fotocartuchera2 from "./assets/cartucheraamayra2.jpg"
import set from "./assets/setvalijaamayra.jpg"
import valija from "./assets/valijaamayra.jpg"


const productos = () => [
    {
        id: 1,
        title: "Cartuchera Amayra",
        image: fotocartuchera1,
        price: 5500,
        medidas: "10x20 cm.",
    },
    {
        id: 2,
        title: "Bolsito Amayra",
        image: fotocartuchera2,
        price: 6200,
        medidas: "13x20 cm."
    },
    {
        id: 3,
        title: "Set Valijas Wilson",
        image: set,
        price: 56600,
        medidas: "12x20 cm."
    },
    {
        id: 4,
        title: "Valija Amayra",
        image: valija,
        price: 9000,
        medidas: "15x20 cm."
    },
]
export default productos