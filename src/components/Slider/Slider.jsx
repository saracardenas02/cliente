import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutLinedIcon from "@mui/icons-material/WestOutlined"
import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/18195029/pexels-photo-18195029.png",
        "https://images.pexels.com/photos/18195043/pexels-photo-18195043.png"
    ]


    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1)
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1)
    }

    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutLinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider