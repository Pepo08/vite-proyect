import { useDebugValue } from "react"
import "./styles.css"
import casa from "./casa.png"

const ItemList = () =>{

    return(
        <div className="NavBar">
            <img src={casa} alt="casa" className="casa"/>
            <p className="list-first">Home</p>
            <p className="list">Productos</p>
            <p className="list">Conacto</p>
            <p className="list">Ayuda</p>
        </div>
    );
}

export default ItemList;