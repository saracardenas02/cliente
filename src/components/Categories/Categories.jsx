import React from "react";
import "./Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
    return (

        <div className="categories">

            <div className="top">
                <h1>NUESTROS PLANES</h1>
            </div>

            <div className="bottom">
            <div className="col">
                <Link className="link" to="/Planes/2"><img src="https://images.pexels.com/photos/18196487/pexels-photo-18196487.jpeg" alt="" /></Link>
            </div> 
           <div className="col">
                <Link className="link" to="/Planes/1"> <img src="https://images.pexels.com/photos/18196486/pexels-photo-18196486.jpeg" alt="" /></Link>
           </div>
            </div>
           
        </div>
    )
}

export default Categories