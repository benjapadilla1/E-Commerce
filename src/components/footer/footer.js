import React from 'react'
import "./footer.css"
const footer = () => {
    return (
        <div className='footer'>
            <h3>
                ¡Seguinos en nuestras redes sociales!
            </h3>
            <a href="https://www.facebook.com/NecyMayorista">
                <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/necymayorista/">
                <i className="bi bi-instagram" />
            </a>
            <a href="https://walink.co/282d6d">
                <i className='bi bi-whatsapp' />
            </a>
            <div className='footerText'>
                <section>
                    <p className="text-center">
                        ---------Horarios De Atención---------
                    </p>
                    <p>
                        Lunes a Viernes 08: 30 a 17: 20 hs.
                        Sábado y Domingo: cerrado
                    </p>
                </section>
            </div>
        </div>
    )
}

export default footer