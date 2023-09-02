import React from "react";
import "./Card.scss"
import { Link } from "react-router-dom";

const Card = ({item}) => {
    return(

        <Link className="link" to={`/plan/${item.id}`}>
            <div className="card">
            <div className="image">
                <img 
                src={
                    import.meta.env.VITE_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                } 
                alt="" 
                className="mainImg" />
            </div>
        </div>
        </Link>
        
    )
}

export default Card