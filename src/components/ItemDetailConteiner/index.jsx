import "./style.css"
import {useParams, useEffect, useState} from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail"

const ItemDetailContainer = () => {
    const [prodcuts, setProducts] = useState(null)
    const {itemId} = useParams()

    useEffect(() =>{
        getProductById(itemId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    return(
        <div>
            <ItemDetail {...prodcuts}/>
        </div>
    )
}

export default ItemDetailContainer;