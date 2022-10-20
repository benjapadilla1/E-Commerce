import React from 'react'
import CarouselHome from '../components/Carousel/CarouselHome'
import prod from "../assets/quienes_somos1.jpg"
import prod2 from "../assets/quienes_somos2.jpg"

function Home() {
    return (
        <div>
            <h2 className='text-center'>
                ¡Bienvenido!
            </h2>
            <div />
            <h4 className='text-center'>
                Venta exclusivamente mayorista
            </h4>
            <p className='text-center'>
                Compra inicial $20.000 con todos los medios de pago
            </p>
            <CarouselHome />
            <h3 className='text-center'>
                ¿Quienes somos?
            </h3>
            <p className="quienesSomos">
                Necy es una empresa familiar posicionada en el mercado desde hace más de 30 años. Contamos con una amplia variedad de productos nacionales e importados en nuestros 15 rubros disponibles. Podes encontrar nuestro local en el centro de la provincia de Córdoba, o solicitar que enviemos tu pedido a cualquier lugar del país. En nuestros catálogos vas a encontrar productos de marroquinería, textil, librería, decoración, viaje y deportivos. Nuestra venta mayorista es únicamente para locales o revendedores.
            </p>
            <div className='homeContainer d-flex justify-content-center'>
                <img src={prod} alt="productos" style={{ width: "350px", margin: "25px" }} />
                <img src={prod2} alt="productos" style={{ width: "350px", margin: "25px" }} />
            </div>
        </div >
    );
}

export default Home