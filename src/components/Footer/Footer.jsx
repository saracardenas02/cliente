import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>About</h1>
                        <span>Esta pagina fue desarrollada por Sara Cardenas, contiene stripe para los pagos online, fue realizada con Nodejs y React
                                Es completamente personalizable y administrable, si se desea agregar mas planes, mas tipos de planes.
                        </span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className="logo">SaraSportPage</span>
                    <span className="copyright">© Copyright 2023. Todos los derechos reservados</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer