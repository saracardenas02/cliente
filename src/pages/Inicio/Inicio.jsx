import Slider from '../../components/Slider/Slider'
import React from "react";
import "./Inicio.scss"
import ZonasDestacadas from '../../components/ZonasDestacadas/ZonasDestacadas';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Inicio = () => {

    return (
        <div className="inicio">
            <Slider/>
            <ZonasDestacadas type="Zonas"/>
            <Categories/>
            <Contact/>
        </div>
    )
}

export default Inicio