import "./style.css"
import {useState, useEffect} from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail"
import ItemListContainer from "../ItemListContainer"

const ItemDetailContainer = () => {
    const [prodcuts, setProducts] = useEffect(null)

    useEffect(() =>{
        getProductById("1")
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    })
    return(
        <div>
            <ItemDetail {...prodcuts}/>
        </div>
    )
}

export default ItemDetailContainer;