import "./style.css"
import { useState } from "react"

const ItemCount = () =>{
    const [numero, setNumero] = useSteate(initial)

    const sumar = () =>{
        if(numero < stock){
            setNumero(numero + 1)
        }
    }
    const restar = () =>{
        if(numero > 1){
            setNumero(numero - 1)
        }
    }
    return(
        <div className="Contenedor">
            <div className="Controls">
                <button className="boton" onClick={sumar}>+</button>
                <p>{numero}</p>
                <button className="boton" onClick={restar}>-</button>
            </div>
        </div>
    )
}

export default ItemCount;