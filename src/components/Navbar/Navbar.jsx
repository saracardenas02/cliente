import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Link } from "react-router-dom"
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left"></div>
                <div className="center">
                    <Link className="link" to="/">SaraSportPage</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Inicio</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Nosotros</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>  
                        <div className="icons">
                            <div className="cartIcon" onClick={()=>setOpen(!open)}>
                                <ShoppingCartOutlinedIcon/>
                                <span>{products.length}</span>
                            </div>
                        </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
};

export default Navbar