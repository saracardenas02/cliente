import React from "react";
import { useParams } from "react-router-dom"
import "./Planes.scss"
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

const Planes = () => {

    const catId = parseInt(useParams().id)

    const {data, loading, error} = useFetch(`/categories?[id][$eq]=${catId}`)

    console.log(data)

    let titulo = "";
    if (catId === 1) {
      titulo = "Planes Basicos";
    } else if (catId === 2) {
      titulo = "Planes Premium";
    }

    return (
        <div className="planes">
            
            <div className="titulo">
            <h1>{titulo}</h1>
            </div>

            <div className="List">
            
            <List catId={catId}/>
              
            </div>
            
           

        </div>
    )
}

export default Planes