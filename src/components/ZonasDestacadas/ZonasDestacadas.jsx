import React from "react";
import "./ZonasDestacadas.scss"

const ZonasDestacadas = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/18195846/pexels-photo-18195846.jpeg"
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/18195845/pexels-photo-18195845.jpeg"
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/18195844/pexels-photo-18195844.jpeg"
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/18195843/pexels-photo-18195843.jpeg"
        }
    ]

    return(
        <div className="zonasDestacadas">
            
            <div className="top">
                <h1>{type} Destacadas</h1>
                <p>Disfruta de nuestras mejores zonas, con el mejor ambiente y la mejor infraestructura</p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                <div className="image" key={item.id}>
                <img src={item.img} alt="" className="mainImg" />
            </div>
            ))}
            </div>

        </div>
    )
}

export default ZonasDestacadas