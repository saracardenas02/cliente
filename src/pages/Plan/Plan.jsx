import React, { useState } from "react";
import "./Plan.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer";

const Plan = () => {

    const id = useParams().id;

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()

    const {data, loading, error} = useFetch(
        `/products/${id}?populate=*`
      );

    return (
        <div className="plan">
           {loading ? "loading" : ( <> <div className="left">
                <img src={import.meta.env.VITE_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url} alt="" />
            </div>

            <div className="right">
               <h1>{data?.attributes?.title}</h1> 
               <span className="price">${data?.attributes?.price}</span>
               <p>{data?.attributes?.desc}</p>
               <div className="quantity">
                    <button 
                        onClick={()=>
                        setQuantity((prev) => (prev === 1 ? 1: prev -1 ))
                        }
                        >
                        -
                        </button>
                      {quantity}  
                    <button onClick={()=> setQuantity((prev) => prev + 1)}>+</button>
               </div>
               <button className="add" onClick={()=>dispatch(addToCart({
                    id:data.id,
                    title:data.attributes.title,
                    desc:data.attributes.desc,
                    price:data.attributes.price,
                    img:data.attributes.img.data.attributes.url,
                    quantity,
               }))}>
                <AddShoppingCartIcon/> AÑADIR AL CARRITO
               </button>
            </div></>)}
        </div>
    )
}

export default Plan